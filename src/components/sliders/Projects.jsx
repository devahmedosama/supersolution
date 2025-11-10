import { useState, useEffect } from 'react';
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import 'photoswipe/dist/photoswipe.css'
import 'react-modal-video/css/modal-video.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import ModalVideo from 'react-modal-video'
import Data from '@data/sliders/projects';
import { cursorSwiperAnimation } from "@/src/common/cursor";
import axios from 'axios';

const ProjectsSlider = ( { projects } ) => {
  
  const [isOpen, setOpen] = useState(false);

  const [modalURL, setModalURL] = useState(false);

  const openSingleModalVideo = (e) => {
    setModalURL(e.target.getAttribute('data-href'));
    setOpen(true);
  }
  const  [data,setData] = useState({});
  const [view_btn, setViewBtn] = useState('View All Projects');
  const apiUrl = process.env.base_url+'api/single-page/3';
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const  language =  localStorage.getItem('language');
        if (language == 'ar'){
            setViewBtn('عرض كل  المشاريع');
        }
        axios.get(apiUrl,{
        headers:{
            'language':language
        }
        }).then(response => {
            setData(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        cursorSwiperAnimation();
    }
  }, []);

  return (
    <>
        {/* portfolio */}
        <div className="container mil-p-0-60">

            <div className="row mil-mb-120">
                <div className="col-xl-6">
                    <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30">{data.sub_title}</h3>
                    <h3 className="mil-mb-30 mil-appearance" dangerouslySetInnerHTML={{__html : data.name}} />
                </div>
                <div className="col-xl-6">
                    <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{data.text}</p>
                    <div className="mil-appearance">
                        <Link href={Data.button.link} className="mil-link-hover">
                            {view_btn}
                        </Link>
                    </div>
                </div>
            </div>
            <Gallery>
            <Swiper
                {...sliderProps.milPortfolioSlider}
                className="swiper-container mil-portfolio-slider mil-appearance"
            >
                {projects.slice(0, Data.numOfItems).map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`projects-slider-item-${key}`}>
                    <div className="mil-portfolio-item">

                        <div className="mil-cover mil-icon-1-trigger mil-light-trigger">
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

                        <Link href={`/projects/${item.id}`} className="mil-item-description mil-word-2-trigger mil-light-trigger">
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
                </SwiperSlide>
                ))}
            </Swiper>
            </Gallery>

            <ModalVideo channel='custom' autoplay isOpen={isOpen} url={modalURL} onClose={() => setOpen(false)} />
        </div>
        {/* portfolio end */}

    </>
  );
};
export default ProjectsSlider;
