import Data from "@data/sections/hero-2.json";
import Link from "next/link";

const HeroTwo = () => {
    return (
        <header>
            <div className="mil-hero-3">
                <div className="mil-dots" />
                <img src="/img/hero/star.svg" alt="star" className="mil-star-1 mil-rotate mil-appearance" data-value="180" />
                <img src="/img/hero/star.svg" alt="star" className="mil-star-2 mil-rotate mil-appearance" data-value="360" />

                <div className="container">
                    <h1 className="mil-mb-30 mil-appearance" dangerouslySetInnerHTML={{__html : Data.title}} />

                    {/* buttons */}
                    <div className="mil-appearance mil-mb-30">
                        <Link href={Data.button1.link} className="mil-button mil-button-rounded mil-button-md mil-button-dark mil-scale-down-trigger mil-accent-trigger mil-buttons-space">
                            <span>{Data.button1.label}</span>
                        </Link>
                        <Link href={Data.button2.link} className="mil-link-hover mil-scale-down-trigger">
                            {Data.button2.label}
                        </Link>
                    </div>
                    {/* buttons end */}

                    <div className="mil-hero-scroll-hint mil-parallax-img mil-appearance" data-value-1="250px" data-value-2="-100px">
                        <div className="mil-circle-text mil-rotate-infinite mil-accent-inside" data-value="360">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                <defs>
                                    <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                </defs>
                                <circle cx="150" cy="100" r="75" fill="none" />
                                <g>
                                    <use xlinkHref="#circlePath" fill="none" />
                                    <text className="mil-link mil-light" style={{"letterSpacing": "7px"}}>
                                        {/* circle text */}
                                        <textPath xlinkHref="#circlePath">{Data.rotateText}</textPath>
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className="mil-hero3-image-position mil-appearance">
                        <div className="mil-hero3-image-frame">
                            <img src={Data.image.url} alt={Data.image.alt} className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                        </div>
                        <div className="mil-hero-text-line">
                            <div className="mil-travel-x" data-value="-15%">
                                {Data.lineText.map((item, key) => (
                                    <div key={`line-text-item-${key}`}>
                                        <p className="mil-link">{item.text}</p>{item.separator != '' && <span>&#x2022;</span> }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeroTwo;