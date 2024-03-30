import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import PricingSection from "@components/sections/Pricing";

import Link from "next/link";

const Services = (props) => {
  
  const Content = {
    "title": "Our top-quality services",
    "subtitle": "Services",
    "description1": "If you're looking for top-quality content that engages, informs, and converts your audience, you've come to the right place. Our experienced team works closely with you to understand your brand and your target audience, and we create content that speaks directly to them.",
    "description2": "At Lettery, we're committed to providing our clients with the highest level of service and support. Contact us today to learn more about how we can help you achieve your content and social media goals."
  }

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/13.jpg"} pageTitle={"Services"} />

      {/* services */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">

          <div className="row justify-content-between">
              <div className="col-lg-4 mil-mb-120">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.subtitle}</span>
                  <h3 className="mil-appearance mil-mb-30">{Content.title}</h3>

                  <p className="mil-appearance mil-mb-30">{Content.description1}</p>
                  <p className="mil-appearance mil-mb-30">{Content.description2}</p>

                  <div className="mil-deco mil-appearance"></div>
              </div>
              <div className="col-lg-7">
                  <div className="row">
                      {props.services.map((item, key) => (
                      <div className="col-xl-6 col-lg-12" key={`services-item-${key}`}>

                          {/* service card */}
                          <Link href={`/services/${item.id}`} className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30">
                              <div className="mil-card-content">
                                  {/* icon */}
                                  <img src={item.image} alt={item.title} className="mil-card-icon" />
                                  <div>
                                      {/* text */}
                                      <h5 className="mil-mb-10">{item.title}</h5>
                                      <p className="mil-softened-40">{item.short}</p>
                                  </div>
                              </div>
                          </Link>
                          {/* service card end */}

                      </div>
                      ))}                      
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">

              </div>
          </div>
      </div>
      {/* services end */}
      
      <PricingSection />
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}