import Data from "@data/sections/awards.json";
import { useEffect,useState } from "react";
import axios from "axios";
const AwardsSection = () => {
    const [data,setData] = useState({});
    const [partners,setPartners] =  useState([]);
    const base_url  =  process.env.base_url;
    useEffect(() => {
        const apiUrl = process.env.base_url + 'api/single-page/5';
        if (typeof window !== 'undefined') {
          const language = localStorage.getItem('language');
          if (language) {
            axios.get(apiUrl, {
              headers: {
                'language': language
              }
            })
            .then(response => {
              setData(response.data.data);
              setPartners(response.data.data.items);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
          }
        }
      }, []);
  return (
    <div className="mil-gray-bg mil-p-120-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{data.name}</span>
                    <h3 className="mil-mb-30 mil-appearance">{data.sub_title}</h3>
                </div>
                <div className="col-lg-6">
                    <p className="mil-appearance mil-mt-55-adapt mil-mb-60">{data.text}</p>
                    <div className="mil-divider mil-appearance mil-mb-60"></div>
                    <div className="row">
                        {partners.map((item, key) => (
                        <div key={`award-item-${key}`} className="col-lg-6 mil-mb-30">
                            <div className="mil-appearance">
                                <div className="mil-flex justify-content-between mil-mb-10">
                                    <h6>{item.name}</h6>
                                    <span className="mil-accent">{item.sub_title}</span>
                                </div>
                                <p className="mil-mb-15">{item.text}</p>
                                <div className="mil-deco"></div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AwardsSection;