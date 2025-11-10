import { useState,useEffect } from 'react';

import Data from "@data/sections/related-projects.json";
import Link from "next/link";

import 'photoswipe/dist/photoswipe.css'
import 'react-modal-video/css/modal-video.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import ModalVideo from 'react-modal-video'
import axios from 'axios';
const RelatedProjectsSection = ( Content ) => {

    const [isOpen, setOpen] = useState(false);
    const [view_all,setViewAll] =  useState(null);
    const [modalURL, setModalURL] = useState(false);
    const [data,setData] =  useState({});

    const openSingleModalVideo = (e) => {
      setModalURL(e.target.getAttribute('data-href'));
      setOpen(true);
    }
    const  pageData = async ()=>{
        const  language =  localStorage.getItem('language');
        if (language == 'en') {
            setViewAll('View All');
        }else{
            setViewAll('عرض المزيد');
        }
        const apiUrl = process.env.base_url+'api/single-page/11';
        axios.get(apiUrl,{
            headers:{
                'language':language
            },
            next:{
                revalidate:3600
              }
        }).then(response=>{
            setData(response.data.data)
        })

    }
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            pageData();
        }
    },[])
    return (
        <div className="mil-gray-bg mil-portfolio-fw mil-appearance">

            <div className="container mil-p-120-90">

                <div className="row justify-content-between">
                    <div className="col-xl-6">

                        <h3 className="mil-link mil-softened-60 mil-mb-30">{data.sub_title}</h3>
                        <h3 className="mil-mb-30 mil-appearance" dangerouslySetInnerHTML={{__html : data.name}} />

                    </div>
                    <div className="col-xl-4 mil-mb-120">

                        <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{data.text}</p>
                        
                        {/* button */}
                        <div className="mil-appearance">
                            <Link href={Data.button.link} className="mil-link-hover">{view_all}</Link>
                        </div>

                    </div>
                    <Gallery>
                    {Content.items.slice(0, Data.numOfItems).map((item, key) => (
                    <div className="col-lg-4" key={`related-project-${key}`}>

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
                            <Link href={`/projects/${item.id}`} className="mil-item-description mil-icon-2-trigger mil-accent-trigger">
                                <div className="mil-text-bg mil-mb-5">
                                    <h5 className="mil-light">{item.title}</h5>
                                </div>
                                <br />
                                <div className="mil-text-bg">
                                    <p className="mil-link mil-accent">{item.category}</p>
                                </div>
                            </Link>
                            <a data-fancybox="gallery2" data-no-swup href={item.image} className="mil-zoom-icon mil-hidden-trigger">
                                <img src="/img/icons/zoom.svg" alt="zoom" />
                            </a>

                            {item.type != "video" &&
                            <Item
                              original={item.image}
                              thumbnail={item.image}
                              width={item.imageWidth}
                              height={item.imageHeight}
                            >
                            {({ ref, open }) => (
                            <a data-fancybox="gallery2" ref={ref} onClick={open} data-no-swup className="mil-zoom-icon mil-hidden-trigger" style={{ "cursor" : "pointer" }}>
                                <img src="/img/icons/zoom.svg" alt="zoom" />
                            </a>
                            )}
                            </Item>
                            }
                            {item.type == "video" &&
                            <a data-fancybox="gallery2" data-href={item.image} onClick={openSingleModalVideo} data-no-swup className="mil-zoom-icon mil-hidden-trigger" style={{ "cursor" : "pointer" }}>
                                <img src="/img/icons/zoom.svg" alt="zoom" />
                            </a>
                            }
                        </div>

                    </div>
                    ))}
                    </Gallery>
                </div>

            </div>

            <ModalVideo channel='custom' autoplay isOpen={isOpen} url={modalURL} onClose={() => setOpen(false)} />
        </div>

    );
};

export default RelatedProjectsSection;