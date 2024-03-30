import { useState,useEffect } from 'react';

import Data from "@data/sections/projects.json";
import Link from "next/link";

import 'photoswipe/dist/photoswipe.css'
import 'react-modal-video/css/modal-video.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import ModalVideo from 'react-modal-video'
import axios from 'axios';
const ProjectsSection = ( { projects } ) => {
    const [data, setData] = useState({});
    useEffect(() => {
        countersAnimation();
        const base_url  =  process.env.base_url;
        const apiUrl = process.env.base_url+'api/single-page/3';
        axios.get(apiUrl,{
            next:{
                revalidate:3600
              }
        })
        .then(response => {
            setData(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        
    }, []);
    const projectsGrid = [];
    projectsGrid.push(partners.slice(0, 1));
    projectsGrid.push(partners.slice(1, 6));
  
    const [isOpen, setOpen] = useState(false);
  
    const [modalURL, setModalURL] = useState(false);
  
    const openSingleModalVideo = (e) => {
      setModalURL(e.target.getAttribute('data-href'));
      setOpen(true);
    }  

  return (
    <>
        {/* portfolio title */}
        <div className="container mil-p-120-120">

            <div className="row justify-content-between">
                <div className="col-xl-6">

                    <h3 className="mil-link mil-softened-60 mil-mb-30">{data.name}</h3>
                    <h3 className="mil-mb-30 mil-appearance">{data.sub_title}</h3>

                </div>
                <div className="col-xl-6">

                    <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{data.text}</p>
                    {/* button */}
                    <div className="mil-appearance">
                        <Link href={Data.button.link} className="mil-link-hover">{Data.button.label}</Link>
                    </div>

                </div>
            </div>
            </div>
            {/* portfolio title end */}

            {/* portfolio */}
            <div className="mil-portfolio-fw mil-appearance">

            <div className="row m-0">
            <Gallery>
                {projectsGrid.map((col, col_i) => (
                <div className="col-lg-6 p-0" key={`projects-col-${col_i}`}>
                    <div className="row m-0">
                        
                        {col.map((item, key) => (
                        <div key={`projects-item-${key}`} className={ ( col_i == 0 ) ? "col-lg-12 p-0" : "col-lg-6 p-0" }>
                        <div className="mil-portfolio-item">

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
                            <Link href={`/portfolio/${item.id}`} className="mil-item-description mil-icon-2-trigger mil-accent-trigger">
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
            </Gallery>
            </div>

            <ModalVideo channel='custom' autoplay isOpen={isOpen} url={modalURL} onClose={() => setOpen(false)} />
        </div>
        {/* portfolio end */}
    </>
  );
};

export default ProjectsSection;