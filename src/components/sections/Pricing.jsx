import Data from "@data/sections/pricing.json";
import Link from "next/link";

const PricingSection = () => {
    
    return (

    <div className="mil-gray-bg mil-p-120-90">
        <div className="container">
            <div className="row justify-content-between mil-mb-120">
                <div className="col-xl-5">

                    <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{Data.subtitle}</h3>
                    <h3 className="mil-mb-30 mil-appearance">{Data.title}</h3>

                </div>
                <div className="col-xl-6">

                    <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{Data.description}</p>

                    <div className="mil-appearance">
                        <Link href={Data.button.link} className="mil-link-hover">
                            {Data.button.label}
                        </Link>
                    </div>

                </div>
            </div>
            <div className="row">
                {Data.items.map((item, key) => (
                <div className="col-lg-4" key={`pricing-item-${key}`}>
                    
                    {/* price card */}
                    <div className="mil-price-card mil-appearance mil-mb-30">
                        <h5 className="mil-mb-15">{item.name}</h5>
                        <p className="mil-h6 mil-bold mil-mb-30">{item.subname}</p>

                        <div className="mil-price-number mil-mb-10">{item.price}<span>{item.price_after}</span></div>
                        <p className="mil-h6 mil-bold mil-mb-30">{item.price_label}</p>

                        <div className="mil-divider mil-mb-30"></div>

                        <ul className="mil-mb-30">
                            {item.list.map((element, key2) => (
                                <li className={element.active != 1 ? "mil-empty": ""} key={`pricing-item-${key}-list-${key2}`}>
                                    { element.active == 1 &&
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z" />
                                        </svg>
                                    }
                                    { element.active != 1 &&
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z" />
                                        </svg>
                                    }
                                    <span>{element.value}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href={item.button.link} className="mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space">
                            <span>{item.button.label}</span>
                        </Link>
                    </div>
                    {/* price card end */}

                </div>
                ))}
                
            </div>
        </div>
    </div>

    );
};

export default PricingSection;