import { PER_PAGE } from './blog/page/[page]'
import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData } from "../lib/posts";
import { useState,useEffect } from "react";
import axios from 'axios';
export const Content = {
  "subtitle": "Newsletter",
  "title": "News from the life <br />of our agency.",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga ratione cum maxime ullam id voluptatibus commodi dolorem at, aut, odio, amet quod molestias possimus. Sunt repudiandae ipsam, consectetur repellendus."
}

const Blog = ( { posts, totalPosts, currentPage } ) => {
  const [data,setData] =  useState({});
  const [items,setItems] = useState([]);
  const [current,setCurent] = useState(1);
  const [total,setTotal] = useState(6);
  const base_url = process.env.base_url;
  useEffect(()=>{
    if (typeof window !=='undefined') {
      const language  =  localStorage.getItem('language');
      axios.get(base_url+'api/single-page/12',{
        headers:{
          'language':language
        }
      }).then(reposponse=>{
        setData(reposponse.data.data);
      });
      axios.get(base_url+'api/posts',{
        headers:{
          'language':language
        }
      })
        .then(response => {
          setItems(response.data.data);
          setCurent(response.data.current);
          setTotal(response.data.total);
        })
    }
  },[])
  return (
    <Layouts>
      <PageBanner pageImage={base_url+data.image} pageTitle={"Blog"} />

      <div className="mil-spacer" />

      {/* blog */}
      <div className="mil-blog-section">
          <div className="container mil-content-frame mil-appearance mil-p-120-90">
              <div className="row justify-content-between mil-mb-120">
                  <div className="col-xl-5">

                      <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{data.name}</h3>
                      <h3 className="mil-mb-30 mil-appearance" dangerouslySetInnerHTML={{__html : data.name}} />

                  </div>
                  <div className="col-xl-6">

                      <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{data.text}</p>

                      <div className="mil-deco mil-appearance"></div>

                  </div>
              </div>
              <div className="row">
                  <PaginatedBlog
                    items={items}
                  />
              </div>
          </div>
          
          <Pagination
            currentPage={current}
            totalItems={total}
            perPage={5}
            renderPageLink={(page) => `/blog/page/${page}`}
          />
      </div>
      {/* blog end */}

      
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData( PER_PAGE, 1 );

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1
    }
  }
}