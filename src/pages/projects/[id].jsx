import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import axios from "axios";
import { useEffect,useState } from "react";
import { useRouter } from 'next/router';
import RelatedProjectsSection from "@components/sections/RelatedProjects";

const ProjectShow = ( props ) => {
    const base_url  =  process.env.base_url;
    const [data,setData] = useState({});
    const [posts,setPosts] = useState([]);
    const [id, setId] = useState(1);
    const router = useRouter();
    const projectData = async (id) => {
      try {
        const language = localStorage.getItem('language');
        const response = await axios.get(`${base_url}api/single-project/${id}`,{
          headers:{
            'language':language
          }
        });
        setData(response.data);
        const res_posts = await axios.get(`${base_url}api/related-projects/${id}`,{
          headers:{
            'language':language
          }
        });
        setPosts(res_posts.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    
    useEffect(() => {
      const { id } = router.query; 
      if (id && !isNaN(id) && typeof window !== 'undefined') {
        const projectId = Number(id);
        setId(projectId);
        projectData(projectId);
      }
    }, [router.query.id]);

    return (
      <Layouts>
        <PageBanner pageImage="/img/content/24.jpg" pageTitle="Single Project" />
        <div className="container mil-mb-120">
            <Gallery>
            <div className="row justify-content-center">
                <div className="col-lg-12 col-xl-9 mil-content-frame mil-appearance mil-p-120-0">

                    <h3 className="mil-link mil-text-center mil-appearance mil-softened-60 mil-mb-30" style={{ width: '100%' }}>{data.category}</h3>
                    <h3 className="mil-text-center mil-appearance mil-mb-60">{data.title}</h3>

                    <div className="mil-divider mil-appearance mil-mb-30"></div>

                  
                    
                    {data.type != "video" &&
                    <Item
                        original={data.image}
                        thumbnail={data.image}
                        width="1200"
                        height="1200"
                    >
                    {({ ref, open }) => (
                    <a data-fancybox="gallery" ref={ref} onClick={open} data-no-swup className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-120" style={{ 'cursor' : 'pointer' }}>
                        
                        <img 
                          src={data.image} 
                          alt={data.title} 
                          className="mil-scale-img" 
                          data-value-1="1" 
                          data-value-2="1.1" 
                          style={{'objectPosition': 'top'}} 
                        />
        
                    </a>
                    )}
                    </Item>
                    }

                    {data.type == "video" &&
                    <a data-fancybox="gallery" data-no-swup className="mil-appearance mil-just-image mil-image-hori mil-accent-trigger mil-mb-120">
                        <div className="mil-image-frame">
                          <video className="mil-video-background" data-value="1.2" autoPlay="autoplay" loop="loop" muted="true" playsInline="true" onContextMenu={(e)=> e.preventDefault()} preload="auto">
                              <source src={data.image} />
                          </video>
                        </div>
                    </a>
                    }
                    
                </div>
                
                  <>
                    <div className="col-lg-10 col-xl-6">
                        <p className="mil-first-letter mil-appearance">
                          {data.text}
                        </p>
                    </div>
                  </>
            </div>
            
            </Gallery>
        </div>
        <RelatedProjectsSection items={posts} />
      </Layouts>
    );
  };
  
export default ProjectShow;