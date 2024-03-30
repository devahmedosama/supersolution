import Data from "@data/sections/call-to-action.json";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const CallToActionSection = ( { bg } ) => {
  const [data,setData] = useState({});
  useEffect(()=>{
      if (typeof window !== 'undefined') {
        const base_url =  process.env.base_url;
        const language =  localStorage.getItem('language');
        axios(base_url+'api/single-page/13',{
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
  },[]);
  return (
    <div className={`${bg != "gray" ? "mil-accent-bg": "mil-gray-bg"}`}>
        <div className="container mil-p-60-30">
            <div className="row align-items-center">
                <div className="col-lg-9 mil-mb-30">
                    <h4 className="mil-buttons-space">{data.sub_title}</h4>
                </div>
                <div className="col-lg-3 mil-mb-30">
                    <Link href="/contact" className="mil-float-right mil-button mil-button-lg mil-button-dark mil-scale-down-trigger mil-accent-trigger">
                        <span>{data.name}</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CallToActionSection;