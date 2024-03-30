import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import appData from "@data/app.json";
import { useEffect,useState } from "react";
import axios from "axios";
const Contact = () => {

  const Content = {
    "subtitle": "Contact",
    "title": "Get in touch",
    "info": [
      {
        "icon": "img/icons/4.svg",
        "label": "Support email",
        "value": "mil.design.inbox@mail.com"
      },
      {
        "icon": "img/icons/7.svg",
        "label": "Call 24/7",
        "value": "+49 (055) 742 78 84"
      }
    ]
  }
  const  base_url  =  process.env.base_url;
  const [settings,setSettings] = useState({});
  const [data,setData] =  useState({});
  const [words,setWords] = useState({});
  useEffect(()=>{
        if (typeof window !== 'undefined') {
            const language = localStorage.getItem('language');
            if (language == 'en') {
                setWords({
                    'contact':'Contact',
                    'get_in_touch':'Get In Touch',
                    'email':'E-mail',
                    'name':'Name',
                    'message':'Message',
                    'send_message':'Send Message',
                    'support_email':'Support E-mail',
                    'call_us':'Call Us',
                });
            }else{
                setWords({
                    'contact':'اتصل بنا',
                    'get_in_touch':'تواصل معنا',
                    'email':'البريد اﻷلكتروني',
                    'name':'الاسم',
                    'message':'الرسالة',
                    'send_message':'إرسال',
                    'support_email':'البريد  اﻷلكتروني ',
                    'call_us':'اتصل بنا',
                });
            }
        }
       axios.get(`${base_url}api/settings`).then(response=>{
            setSettings(response.data.data);
       })
       
  },[])
  return (
    <Layouts>
      <PageBanner pageImage={base_url+settings.meta} pageTitle={settings.name} />

      {/* contact */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
          <div className="row justify-content-between mil-mb-90">
              <div className="col-xl-5">

                  <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{words.contact}</h3>
                  <h3 className="mil-mb-60 mil-appearance">{words.get_in_touch}</h3>

              </div>
              <div className="col-xl-6">

                  <div className="row mil-mt-55-adapt">

                      <div className="col-lg-6" >
                          <div className="mil-icon-box mil-box-hori mil-appearance mil-mb-30">
                              <div className="mil-icon mil-accent">
                                  <img src="img/icons/4.svg" className="contact_img" alt='email' />
                              </div>
                              <div className="mil-icon-box-text">
                                  <h6>{settings.email}</h6>
                                  <p>{words.support_email}</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6" >
                          <div className="mil-icon-box mil-box-hori mil-appearance mil-mb-30">
                              <div className="mil-icon mil-accent">
                                  <img src="img/icons/7.svg" className="contact_img" alt='email' />
                              </div>
                              <div className="mil-icon-box-text">
                                  <h6>{settings.phone}</h6>
                                  <p>{words.call_us}</p>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>
          </div>
          <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting } ) => {
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                        status.innerHTML = data.thanks_message;
                        form.reset()
                    
                }).catch(error => {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit} id="contactForm" action={base_url+'api/contact'}>
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <input 
                            className="mil-link" 
                            type="text"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <label className="mil-link">{words.name}</label>
                          <span></span>
                          <em>{errors.name && touched.name && errors.name}</em>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <input 
                            className="mil-link" 
                            type="email" 
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <label className="mil-link">{words.email}*</label>
                          <span></span>
                          <em>{errors.email && touched.email && errors.email}</em>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <textarea 
                            name="message"
                            className="mil-link" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          />
                          <label className="mil-link">{words.message}</label>
                          <span></span>
                          <em>{errors.message && touched.message && errors.message}</em>
                      </div>
                  </div>
                 
                  <div className="col-lg-6">
                      <button type="submit" className="contact_btn mil-float-right mil-button mil-button-lg mil-scale-down-trigger mil-dark-trigger mil-mb-30" disabled={isSubmitting}>
                        <span>{words.send_message}</span>
                      </button>
                  </div>
                  <div className="form-status" id="contactFormStatus" />
              </div>
          </form>
          )}
          </Formik>
      </div>
      {/* contact end */}

      {/* map */}
      <div className="mil-map-frame">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226.2089233572223!2d46.6099172!3d24.886287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eefc4386172a1%3A0xce82245f54f7e4db!2z2YXZg9in2KrYqCDZhdik2KvYq9ipINmIINmF2KzZh9iy2KkgU3VwZXIgT2ZmaWNlIEFsIEFhcmlk!5e0!3m2!1sen!2seg!4v1708363475816!5m2!1sen!2seg"
          width={600} 
          height={450} 
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
        />
      </div>
      {/* map end */}
      
    </Layouts>
  );
};
export default Contact;
