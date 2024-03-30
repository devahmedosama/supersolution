import Data from "@data/sections/about-4.json";
import axios from "axios";
import { useState,useEffect } from "react";
const AboutFourSection = ({page,pageitems}) => {
    const  [items,setItems] = useState([]);
    const  apiUrl = process.env.base_url+'api/single-page/2';
    const  image_url  = process.env.base_url;
    useEffect(()=>{
            const language = localStorage.getItem('language')??'en';
            axios.get(apiUrl,{
                headers:{
                    'language':language
                },
                next:{
                    revalidate:3600
                  }
            })
            .then(response => {
                setItems(response.data.data.items);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[])
    
  return (
    <>
        {/* about */}
        <div className="container mil-p-120-0">

            <div className="row flex-sm-row-reverse justify-content-between align-items-center">

                <div className="col-xl-6 mil-mb-120">
                    <h3 className="mil-appearance mil-mb-30">
                        {page.name} 
                        {page.sub_title}
                    </h3>
                    <p className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : page.text}} />

                    {items.map((item, key) => (
                    <div key={`about4-item-${key}`} className={`mil-icon-box mil-box-hori mil-appearance${key != (Data.items.length - 1) ? " mil-mb-15" : ""}`}>
                        <div className="mil-icon mil-accent">
                            <img src={process.env.base_url+item.image} alt={item.name} />
                        </div>
                        <div className="mil-icon-box-text">
                            <h6>{item.name}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="col-xl-5 mil-mb-120">

                    <div className="mil-collage-3 mil-appearance">
                        <div className="mil-image-1 mil-appearance">
                            <div className="mil-just-image mil-image-square">
                                <img src={image_url+page.image2} alt="img" className="mil-scale-img" data-value-1="1" data-value-2="1.2" style={{'objectPosition': "top left"}} />
                            </div>
                        </div>
                        <div className="mil-image-2 mil-appearance">
                            <div className="mil-just-image mil-image-square">
                                <img src={image_url+page.image} alt="img" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        {/* about end */}
    </>
  );
};

export default AboutFourSection;