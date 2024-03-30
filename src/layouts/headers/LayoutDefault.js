import Link from "next/link";
import { useState,useEffect } from "react";
import appData from "@data/app.json";
import axios from "axios";

const DefaultHeader = ({ transparent, invert, extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [words,setWords]    = useState({});
  const [settings,setSettings] = useState({});
  const  [other_lang,setOtherLang] = useState('العربية');
  const navItems = [];
  
  useEffect(function(){
    if (typeof window !== 'undefined') {
      const language   =  localStorage.getItem('language');
      if (language == 'ar') {
        setOtherLang('English');
      }else{
        setOtherLang('العربية');
      }
      const  base_url  =   process.env.base_url;
      if (language == 'ar') {
        setWords({
          'home':'الرئيسية',
          'about':'من نحن',
          'portfolio':'أعمالنا',
          'blog':'المدونة',
          'contact':'اتصل بنا',
        });
      }else{
        setWords({
          'home':'Home',
          'about':'About Us',
          'portfolio':'Portfolio',
          'blog':'Blog',
          'contact':'Contact',
        });
      }
      axios.get(`${base_url}api/settings`,{
        next:{
          revalidate:3600
      }
      }).then(response=>{
        setSettings(response.data.data);
      })
    }
    
  },[]);
  const handleReload = () => {
    if (typeof window !== 'undefined') {
      const  language  =  localStorage.getItem('language');
      if (language == 'en') {
        localStorage.setItem('language','ar');
      }else{
        localStorage.setItem('language','en');
      }
      window.location.reload();
    }
    
  }
  appData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'mil-has-children';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  return (
        <div className={`mil-top-panel${transparent ? " mil-transparent-nav" : "" }${!invert ? " mil-invert-nav" : "" } mil-animated ${extraClass ? extraClass : ""}`}>
            <div className="container">
                <Link href="/" legacyBehavior>
                  <a className="mil-logo mil-scale-down-trigger mil-accent-trigger">
                      <div className="mil-h5">
                        {appData.header.logo.text}<span className="mil-accent">{appData.header.logo.accent}</span>
                      </div>
                  </a>
                </Link>
                <div className={`mil-mobile-dropdown mil-menu-center ${toggle ? "mil-active" : ""}`}>
                    <div id="swupTopbar" className="mil-top-bar-transition">
                        <nav className="mil-dark-nav">
                            <ul className="mil-inline-list mil-hidden-trigger">
                                <li >
                                    <Link href="/" className="mil-link">
                                      {words.home}
                                    </Link>
                                </li>
                                <li >
                                    <Link href="/about" className="mil-link">
                                      {words.about}
                                    </Link>
                                </li>
                                <li >
                                    <Link href="/portfolio" className="mil-link">
                                      {words.portfolio}
                                    </Link>
                                </li>
                                <li >
                                    <Link href="/blog" className="mil-link">
                                      {words.blog}
                                    </Link>
                                </li>
                                <li >
                                    <Link href="/contact" className="mil-link">
                                      {words.contact}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <ul className="mil-social mil-hidden-trigger">
                        <li>
                          <a href={settings.twitter} target="_blank">
                              <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={settings.facebook} target="_blank">
                              <i className="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href={settings.instagram} target="_blank">
                              <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a className="change_lang"  onClick={handleReload}>
                             {other_lang}
                          </a>
                        </li>
                    </ul>
                </div>
                
                {/* mobile menu button */}
                <div 
                  className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                    <span />
                </div>
                {/* mobile menu button end */}
            </div>
        </div>
  );
};
export default DefaultHeader;
