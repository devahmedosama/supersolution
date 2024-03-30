import Data from "@data/sections/related-posts.json";
import Date from '@library/date';
import Link from "next/link";
import { useEffect, useState } from "react";
const RelatedPostsSection = ( Content ) => {
    const [btn_text,setBtnText] = useState('view more');
    useEffect(()=>{
            if (typeof window !== 'undefined') {
                const language = localStorage.getItem('language');
                if (language == 'ar') {
                    setBtnText('عرض المزيد')
                }
            }
    },[])
    
    const data  =  Content.data;
    return (
        <div className="mil-gray-bg">
            <div className="container mil-p-120-90">
                <div className="row justify-content-between mil-mb-120">
                    <div className="col-xl-5">

                        <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{data.sub_title}</h3>
                        <h3 className="mil-mb-30 mil-appearance" dangerouslySetInnerHTML={{__html : data.name}} />

                    </div>
                    <div className="col-xl-6">

                        <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{data.text}</p>

                        {/* button */}
                        <div className="mil-appearance">
                            <a href={Data.button.link} className="mil-link-hover">{btn_text}</a>
                        </div>

                    </div>
                </div>
                <div className="row">
                    {Content.items.slice(0, Data.numOfItems).map((item, key) => (
                    <div className="col-xl-4" key={`related-post-${key}`}>
                        <Link href={`/blog/${item.id}`} className="mil-card-1 mil-icon-2-trigger mil-accent-trigger mil-appearance mil-mb-30">
                            <div className="mil-cover mil-square">
                                <div className="mil-image-frame">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </div>
                            <div className="mil-overlay mil-inside mil-gradient-overlay">
                                <div className="mil-description">
                                    <div className="mil-post-info mil-mb-30">
                                        <span  className="mil-accent mil-link">{item.category}</span>
                                        <span className="mil-dot-divider mil-link mil-accent">&#x2022;</span>
                                    </div>
                                    <h5 className="mil-light">{item.title}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedPostsSection;