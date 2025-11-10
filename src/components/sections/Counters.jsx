import { useState,useEffect } from "react";
import Data from "@data/sections/counters.json";
import { countersAnimation } from "@/src/common/counters";
import axios from "axios";
const CountersSection = () => {
  const [data, setData] = useState({});
  const [items,setItems] = useState([]);
  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      countersAnimation();
      const apiUrl = process.env.base_url+'api/single-page/3';
      const  language =  localStorage.getItem('language');
      axios.get(apiUrl,{
        headers:{
          'language':language
        },
        next:{
          revalidate:3600
        }
      })
      .then(response => {
          setData(response.data.data);
          setItems(response.data.data.items);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
    }
    
  }, []);

  return (
    <div className="container mil-p-0-90">
        <div className="row">
            {items.map((item, key) => (
            <div key={`counter-item-${key}`} className="col-md-6 col-xl-3 mil-mb-30">

                <p className="mil-link mil-softened-50 mil-appearance">{item.name}</p>
                <div className="mil-h3 mil-appearance"><span className="mil-counter" data-number={parseInt(item.sub_title)}>{item.sub_title}</span><span className="mil-accent">+</span></div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default CountersSection;