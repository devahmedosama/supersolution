import React, { useEffect,useState } from "react";
import Head from "next/head";

import '../styles/scss/style.scss';
import "../styles/globals.css";
// import '../styles/scss/style_ar.css';


import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>SuperSolution</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      {language === 'ar' && <link rel="stylesheet" href="/css/style_ar.css" />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
