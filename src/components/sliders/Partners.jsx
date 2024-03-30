import Data from "@data/sliders/partners.json";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect,useState } from "react";
import axios from "axios";
const PartnersSlider = () => {
    const [partners,setPartners] =  useState([]);
    const base_url  =  process.env.base_url;
    useState(()=>{
        const apiUrl = process.env.base_url+'api/single-page/4';
        axios.get(apiUrl)
        .then(response => {
            setPartners(response.data.data.items);
        })
    },[])
  return (
    <div className="mil-p-60-60">
        <Swiper
            {...sliderProps.milInfinitySlider}
            className="swiper-container mil-infinite-show"
        >
            {partners.map((item, key) => (
            <SwiperSlide className="swiper-slide" key={`partners-item-${key}`}>
                <a  className="mil-partner-frame mil-hidden-trigger">
                    <img 
                        src={base_url+item.image} 
                        alt={item.name}
                        className="mil-grayscale mil-opacity partner-logo" 
                    />
                </a>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default PartnersSlider;