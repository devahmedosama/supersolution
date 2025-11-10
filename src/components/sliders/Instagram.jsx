import Data from "@data/sliders/instagram.json";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useEffect,useState } from "react";
const InstagramSlider = () => {
  const [partners,setPartners] =  useState([]);
  const [data,setData] =  useState({});
    const base_url  =  process.env.base_url;
    useState(()=>{
        const apiUrl = process.env.base_url+'api/single-page/7';
        axios.get(apiUrl)
        .then(response => {
            setPartners(response.data.data.items);
            setData(response.data.data);
        })
    },[])
  return (
    <div className="mil-instagram-frame mil-appearance">
          <Swiper
            {...sliderProps.milInstagramSlider}
            className="swiper-container mil-instagram-slider"
          >
            {partners.map((item, key) => (
            <SwiperSlide className="swiper-slide mil-instagram-item" key={`instagram-item-${key}`}>
                <img 
                src={base_url+item.image} 
                alt="instagram"
                />
            </SwiperSlide>
            ))}
          </Swiper>

          <div className="mil-button-positions mil-appearance">
              <a href={data.sub_title} target="_blank" className="mil-button mil-button-lg mil-button-rounded mil-button-light mil-scale-down-trigger"><span><i className="fab fa-instagram"></i> {Data.button.label}</span></a>
          </div>

      </div>
  );
};

export default InstagramSlider;