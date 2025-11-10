import Layouts from "@layouts/Layouts";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

import PageBanner from "@components/PageBanner";
import RelatedPostsSection from "@components/sections/RelatedPosts";
import { useState,useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

const PostsDetail = (  ) => {
  const base_url  = process.env.base_url ;
  const [related,setRelated] = useState([]);
  const [data,setData] = useState({});
  const [post,setPost] = useState({});
  const [id, setId] = useState(1);
  const router = useRouter();
  const projectData = async (id) => {
    try {
        const language =  localStorage.getItem('language');
        const response = await axios.get(`${base_url}api/single-post/${id}`,{
          headers:{
            'language':language
          }
        }).then(response=>{
            setPost(response.data.data);
            setData(response.data.page);
            setRelated(response.data.related);
          });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
    if (typeof window !== 'undifined') {
      const language = localStorage.getItem('language');
      
      
      const { id } = router.query; 
      if (id && !isNaN(id)) {
        const projectId = Number(id);
        setId(projectId);
        projectData(projectId);
      }
    }
    
  },[router.query.id])
  

  return (
    <Layouts>
    
      <PageBanner pageImage={base_url+post.image} pageTitle={post.name} />

      <div className="container mil-mb-120">
        <Gallery>

        <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9 mil-content-frame mil-appearance mil-p-120-0">

                <h3 className="mil-text-center single-post-title mil-appearance mil-mb-60">{post.title} </h3>

                {/* post info */}
                <div className="mil-post-info mil-appearance mil-center mil-mb-30">
                    <span className="mil-dot-divider mil-link mil-accent">&#x2022;</span>
                    <span className="mil-accent mil-link">{post.category}</span>
                    <span className="mil-dot-divider mil-link mil-accent">&#x2022;</span>
                </div>
                {/* post info end */}
                
                <Item
                    original={base_url+post.image}
                >
                {({ ref, open }) => (
                <a data-fancybox="gallery" ref={ref} onClick={open} data-no-swup className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-mb-120" style={{ 'cursor' : 'pointer' }}>
                    <img src={post.image} alt={post.title} className="mil-scale-img" data-value-1="1" data-value-2="1.1" />
                </a>
                )}
                </Item>
            </div>
            
            <div className="col-lg-10 col-xl-6 single-post-text" dangerouslySetInnerHTML={{ __html: post.text }} />
            
          

           
        </div>

        </Gallery>
      </div>

      <RelatedPostsSection data={data} items={related} />
      
    </Layouts>
  );
};
export default PostsDetail;


