import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/hero-1.json";
import { useState,useEffect } from "react";
import axios from "axios";
const HeroOne = () => {
    const [data, setData] = useState({});
    const [partners,setPartner] = useState([]);
    useEffect(() => {
        const apiUrl = process.env.base_url+'api/single-page/1';
        axios.get(apiUrl,{
            next:{
                revalidate:3600
            }
        })
        .then(response => {
            setData(response.data.data);
            setPartner(response.data.data.items);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);
    
    return (
        <header>
            <div className="mil-hero-1">

                <div className="mil-image-frame">
                    <img 
                        src={process.env.base_url+data.image2} 
                        alt="img" 
                        className="mil-scale-img" 
                        data-value-1=".5" 
                        data-value-2="1.2" 
                        style={{filter: 'grayscale(100%)'}}
                    />
                    <div className="mil-overay" />
                </div>

                <div className="container">
                    <div className="row mil-p-120-0 justify-content-between">
                        <div className="col-md-6 col-lg-6">

                            <div className="mil-link mil-appearance mil-softened-60 mil-mb-30">{data.sub_title}</div>
                            <h1 className="mil-light mil-appearance mil-mb-120">
                               {data.name}
                            </h1>
                        </div>
                        <div className="col-md-12 col-lg-5 mil-relative">

                            <div className="mil-dots mil-appearance" />

                            <p className="mil-text-lg mi-suptitle mil-appearance mil-mt-55 mil-mb-60" dangerouslySetInnerHTML={{__html : data.text}} />

                            <div className="mil-scroll-animation-1 mil-appearance mil-mb-60">
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                            </div>

                        </div>
                        <div className="col-12">

                            <div className="mil-appearance">
                                <div className="mil-just-image">
                                    <img 
                                        src={process.env.base_url+data.image2} 
                                        alt="img" 
                                        className="mil-scale-img" 
                                        data-value-1="1" 
                                        data-value-2="1.15" 
                                        style={{'objectPosition': 'center 25%'}}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="col-12">

                            {/* partners */}
                            <Swiper
                                {...sliderProps.milInfinitySlider}
                                className="swiper-container mil-infinite-show"
                            >
                                {partners.map((item, key) => (
                                <SwiperSlide key={`hero1-item-${key}`} className="swiper-slide">
                                    <a href={item.link} className="mil-partner-frame mil-hidden-trigger">
                                        <img 
                                            src={process.env.base_url+item.image} 
                                            alt={item.alt}
                                            className="mil-grayscale mil-opacity partner-logo" 
                                        />
                                    </a>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* partners end */}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeroOne;