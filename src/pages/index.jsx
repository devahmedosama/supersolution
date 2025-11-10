import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import { useEffect,useState } from "react";
import axios from "axios";
import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroThreeSection from "@components/sections/HeroThree";
import AwardsSection from "@components/sections/Awards";
import AboutFourSection from "@components/sections/AboutFour";
import CountersSection from "@components/sections/Counters";
import SubscribeSection from "@components/sections/Subscribe";
import LatestPostsSection from "@components/sections/LatestPosts";

const InstagramSlider = dynamic( () => import("@components/sliders/Instagram"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const ProjectsSlider = dynamic( () => import("@components/sliders/Projects"), { ssr: false } );

const Home3 = (props) => {
  const [projects,setProjects] = useState([]);
  const [posts,setPosts] = useState([]);
  const [page1,setPage1] = useState({});
  const [page2,setPage2] = useState({});
  const [data,setData] = useState({});

  useEffect(()=>{
    const base_url =  process.env.base_url;
    const apiUrl = process.env.base_url+'api/home';
    const language =  localStorage.getItem('language');
    axios.get(apiUrl,{
              headers:{
                'language':language
              },
              next:{
                revalidate:3600
              }
            })
            .then(response => {
              setProjects(response.data.projects);
              setPosts(response.data.posts);
              setPage1(response.data.page1);
              setPage2(response.data.page2);
              setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    
  },[]);
  return (
    <Layouts invert footer={2}>
      <HeroThreeSection page1={page1} />
      <AboutFourSection page={page2} pageitems={page2.items} />
      <CountersSection />
      <ProjectsSlider projects={projects} />
      <PartnersSlider />
      <AwardsSection />
      <LatestPostsSection posts={posts} layout={2} imageHorizontal />
      <InstagramSlider />
    </Layouts>
  );
};
export default Home3;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();
  return {
    props: {
      posts: allPosts,
      projects: allProjects
    }
  }
}