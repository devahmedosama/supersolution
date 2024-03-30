import { useState,useEffect } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

import { getSortedProjectsData } from "@library/projects";

import 'photoswipe/dist/photoswipe.css'
import 'react-modal-video/css/modal-video.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import ModalVideo from 'react-modal-video'
import Link from "next/link";
import axios from 'axios';
const PortfolioTwo = (props) => {
  const  [data,setData] = useState({});
  const  [projects,setProjects] = useState([]);
  const base_url  =  process.env.base_url;
  useState(()=>{
       if (typeof window !== 'undefined') {
          const language =  localStorage.getItem('language');
          axios.get(base_url+'api/single-page/10',{
            headers:{
              'language':language
            }
          })
          .then(response => {
              setData(response.data.data);
          })
          axios.get(base_url+'api/projects',{
            headers:{
              'language':language
            }
          })
          .then(response => {
            setProjects(response.data);
          })
       }
        
    },[])
  const rows = [];
  const projectsGrid = [];

  for (var i = 0; i < projects.length; i += 5 ) {
    rows.push(projects.slice(i, 5 + i));
  }

  rows.forEach( (row) => {
    let row_rows = [];
    row_rows.push(row.slice(0, 2));
    row_rows.push(row.slice(2, 5));

    projectsGrid.push(row_rows);
  })

  const [isOpen, setOpen] = useState(false);

  const [modalURL, setModalURL] = useState(false);

  const openSingleModalVideo = (e) => {
    setModalURL(e.target.getAttribute('data-href'));
    setOpen(true);
  }  

  const Content = {
    "title": "Our recent work",
    "subtitle": "Portfolio",
    "description": "Incidunt rerum neque sint omnis est ipsam nam. Esse natus, officiis illo rem beatae, ut iste quis iusto officia laudantium, sapiente veritatis."
  }
  
  return (
    
    <Layouts>
      
      <PageBanner pageImage={base_url+data.image} pageTitle={"Portfolio"} />

      {/* portfolio */}
      <div className="container mil-content-frame mil-p-120-90 mil-appearance">
          <div className="row">
            <div className="col-12 mil-text-center mil-appearance mil-mb-120">
                <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{data.name}</h3>
                <h3 className="mil-appearance mil-mb-30">{data.sub_title}</h3>
                <p className="mil-text mil-appearance mil-shortened-50 m-auto">{data.text}</p>
            </div>
          </div>

          <Gallery>
          {projectsGrid.map((row, row_i) => (
          <div className={ ( ( row_i % 2 ) == 0 ) ? "row m-0" : "row m-0 flex-row-reverse" } key={`portfolio-row-${row_i}`}>
              {row.map((col, col_i) => (
              <div className="col-lg-12 p-0" key={`portfolio-row-${row_i}-col-${col_i}`}>
                  <div className="row">

                    {col.map((item, key) => (
                    <div className={ ( col_i == 0 ) ? "col-lg-6" : "col-lg-4" } key={`portfolio-row-${row_i}-col-${col_i}-item-${key}`}>
                      <div className="mil-portfolio-item mil-appearance mil-mb-30">

                        <div className="mil-cover mil-square mil-scale-down-trigger mil-accent-trigger">
                            <div className="mil-image-frame">
                                {item.type != "video" &&
                                <img src={item.image} alt={item.title} />
                                }
                                {item.type == "video" &&
                                <video className="mil-video-background" data-value="1.2" autoPlay="autoplay" loop="loop" muted="true" playsInline="true" onContextMenu={(e)=> e.preventDefault()} preload="auto">
                                    <source src={item.image} />
                                </video>
                                }
                            </div>
                        </div>
                        <Link href={`projects/${item.id}`} className="mil-item-description mil-icon-2-trigger mil-accent-trigger">
                            <div className="mil-text-bg mil-mb-5">
                                <h5 className="mil-light">{item.title}</h5>
                            </div>
                            <br />
                            <div className="mil-text-bg">
                                <p className="mil-link mil-accent">{item.category}</p>
                            </div>
                        </Link>
                        
                        {item.type != "video" &&
                        <Item
                          original={item.image}
                          thumbnail={item.image}
                          width={item.imageWidth}
                          height={item.imageHeight}
                        >
                        {({ ref, open }) => (
                        <a data-fancybox="gallery" ref={ref} onClick={open} data-no-swup className="mil-zoom-icon mil-hidden-trigger" style={{ "cursor" : "pointer" }}>
                            <img src="/img/icons/zoom.svg" alt="zoom" />
                        </a>
                        )}
                        </Item>
                        }
                        {item.type == "video" &&
                        <>
                          <a data-fancybox="gallery" data-href={item.image} onClick={openSingleModalVideo} data-no-swup className="mil-zoom-icon mil-hidden-trigger" style={{ "cursor" : "pointer" }}>
                              <img src="/img/icons/zoom.svg" alt="zoom" />
                          </a>
                        </>
                        }

                      </div>
                    </div>
                    ))}
                
                </div>

              </div>
              ))}

          </div>
          ))}
          </Gallery>
      </div>
      {/* portfolio end */}
      
      <ModalVideo channel='custom' autoplay isOpen={isOpen} url={modalURL} onClose={() => setOpen(false)} />
    </Layouts>
  );
};
export default PortfolioTwo;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}