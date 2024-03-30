import { useEffect } from "react";
import Data from "@data/sections/about-2.json";
import { countersAnimation } from "@/src/common/counters";

const AboutTwoSection = () => {
  useEffect(() => {
    countersAnimation();
  }, []);

  return (
    <div className="container mil-p-120-0">

        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="mil-12 col-xl-6 mil-mb-120">

                <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Data.subtitle}</h3>
                <h3 className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                <p className="mil-appearance mil-mb-30">{Data.description}</p>

                {/* counters */}
                <div className="mil-flex">
                    {Data.numbers.map((item, key) => (
                    <div key={`number-item-${key}`} className="mil-mr-30">
                        <p className="mil-link mil-softened-60 mil-appearance">{item.label}</p>
                        <div className="mil-h2 mil-bold mil-appearance"><span className="mil-counter" data-number={item.value}>0</span><span className="mil-accent">+</span></div>
                    </div>
                    ))}
                </div>
                {/* counters end */}

            </div>
            <div className="mil-12 col-xl-5 mil-mb-120">

                {/* collage */}
                <div className="mil-collage-2 mil-appearance">
                    <div className="mil-just-image mil-image-square">
                        <img src={Data.image.url} alt={Data.image.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                    </div>
                </div>
                {/* collage end */}

            </div>
        </div>

    </div>
  );
};

export default AboutTwoSection;