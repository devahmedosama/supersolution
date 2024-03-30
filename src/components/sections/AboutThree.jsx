import Data from "@data/sections/about-3.json";
import Link from "next/link";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const AboutThreeSection = () => {
  return (
    <>
        {/* about */}
        <div className="container mil-p-120-120">

            <div className="row justify-content-between">
                <div className="col-xl-6">

                    <h3 className="mil-link mil-softened-60 mil-mb-30">{Data.subtitle}</h3>
                    <h3 className="mil-mb-30 mil-appearance">{Data.title}</h3>

                </div>
                <div className="col-xl-3">

                    <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{Data.description}</p>
                    
                    {/* button */}
                    <div className="mil-appearance">
                        <Link href={Data.button.link} className="mil-link-hover mil-scale-down-trigger">{Data.button.label}</Link>
                    </div>

                </div>
            </div>            
            
        </div>
        {/* about end */}

        {/* gallery */}
        <div className="container mil-content-frame mil-gallery-1 mil-p-0-90">
            <div className="row justify-content-between align-items-center mil-appearance">
                <Gallery>
                {Data.gallery.map((item, key) => (
                <div key={`about3-gallery-item-${key}`} className="col-md-6 col-xl-3 mil-mb-30">
                    <Item
                        original={item.url}
                        thumbnail={item.url}
                        width={item.width}
                        height={item.height}
                    >
                    {({ ref, open }) => (
                    <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className={`mil-just-image${key % 2 == 0 ? " mil-image-vert" : " mil-image-square" } mil-icon-3-trigger`} style={{ "cursor": "pointer" }}>
                        <img src={item.url} alt={item.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                    </a>
                    )}
                    </Item>
                </div>
                ))}
                </Gallery>
            </div>
        </div>
        {/* gallery end */}

    </>
  );
};

export default AboutThreeSection;