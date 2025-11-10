import Link from "next/link";
import appData from "@data/app.json";
import { useState,useEffect } from "react";
import axios from "axios";
const DefaultFooter = ( { bg, instagram, extraClass } ) => {
    const [words,setWords]    = useState({});
    const [settings,setSettings] = useState({});
    useEffect(function(){
        if (typeof window !== 'undefined') {
          const language   =  localStorage.getItem('language');
          
          const  base_url  =   process.env.base_url;
          if (language == 'ar') {
            setWords({
              'menu':'القائمة',
              'home':'الرئيسية',
              'about':'من نحن',
              'portfolio':'أعمالنا',
              'blog':'المدونة',
              'contact':'اتصل بنا',
              'useful_links':'روابط أخري',
              'contact_us':'اتصل بنا',
              'copy_rights':'جميع الحقوق محفوظه ل superSolution',
              'designed':'تصميم و برمجة : SuperSolution'
            });
          }else{
            setWords({
              'menu':'Menu',
              'home':'Home',
              'about':'About Us',
              'portfolio':'Portfolio',
              'blog':'Blog',
              'contact':'Contact',
              'useful_links':'Useful Links',
              'contact_us':'Contact Us',
              'copy_rights':'All copy rights reserved by SuperSolution 2024',
              'designed':'Designing & Programing : SuperSolution'
            });
          }
          axios.get(`${base_url}api/settings`,{
            headers:{
              'language':language
            },
            next:{
                revalidate:3600
              }
          }).then(response=>{
            setSettings(response.data.data);
          })
        }
        
      },[]);
  return (
    <footer className="mil-footer-1 mil-light-trigger">
        <div className="mil-image-frame">
            <img 
              src={bg ? bg : appData.footer.bg_image}
              alt="img" 
              className="mil-scale-img" 
              data-value-1="1" 
              data-value-2="1.2" 
              style={{filter: 'grayscale(100%)'}}
            />
            <div className="mil-overay"></div>
        </div>
        <div className="container">
            <div className="mil-footer-content mil-p-120-90">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-xl-4 mil-mb-30">
                        <h4 className="mil-light mil-mb-30"> 
                            <span>Super</span>
                            <span className="mil-accent">Solution</span>
                        </h4>
                        <p className="mil-mb-30">{settings.text}</p>
                    </div>
                    <div className="col-lg-12 col-xl-8">
                        <div className="row justify-content-xl-end">
                            <div className="col-lg-4 col-xl-3 mil-mb-30">
                                <h6 className="mil-light mil-mb-30">{words.menu}</h6>
                                {/* menu list */}
                                <ul>
                                    <li>
                                        <Link href="/" className="mil-link mil-link-hover mil-softened-50 mil-light mil-mb-15">
                                           {words.home}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="mil-link mil-link-hover mil-softened-50 mil-light mil-mb-15">
                                           {words.about}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio" className="mil-link mil-link-hover mil-softened-50 mil-light mil-mb-15">
                                           {words.portfolio}
                                        </Link>
                                    </li>
                                    
                                    
                                </ul>
                                {/* menu list end */}
                            </div>
                            <div className="col-lg-4 col-xl-3 mil-mb-30">
                                <h6 className="mil-light mil-mb-30">{words.useful_links}</h6>
                                {/* useful links list */}
                                <ul>
                                    <li>
                                        <Link href="/blog" className="mil-link mil-link-hover mil-softened-50 mil-light mil-mb-15">
                                           {words.blog}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="mil-link mil-link-hover mil-softened-50 mil-light mil-mb-15">
                                           {words.contact}
                                        </Link>
                                    </li>
                                </ul>
                                {/* useful links list end */}
                            </div>
                            <div className="col-lg-4 col-xl-4 mil-mb-30">
                                <h6 className="mil-light mil-mb-30">{words.contact_us}</h6>
                                {/* email */}
                                <a href={`mailto:${settings.email}`} className="mil-link mil-link-hover mil-accent mil-hidden-trigger mil-mb-30">
                                    {settings.email}</a>
                                {/* phone */}
                                <p className="mil-light mil-text-xl mil-bold mil-mb-30">{settings.phone}</p>

                                {/* social */}
                                <ul className="mil-social mil-hidden-trigger mil-left">
                                    <li>
                                        <a href={settings.twitter} target="_blank"  className="mil-light">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={settings.facebook} target="_blank"  className="mil-light">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={settings.instagram} target="_blank"  className="mil-light">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    
                                </ul>
                                {/* social end */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </div>
        <div className="mil-footer-bottom">
            <div className="container">
                {/* copyright */}
                <p className="mil-text-sm mil-softened-60">{words.copy_rights}</p>
                <p className="mil-text-sm mil-softened-60" >{words.designed}</p>
            </div>
        </div>
    </footer>
  );
};
export default DefaultFooter;
