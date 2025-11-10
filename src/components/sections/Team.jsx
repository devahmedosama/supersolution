import Data from "@data/sections/team.json";
import Link from "next/link";

const TeamSection = () => {
    return (
      <div className="mil-team-section">
        <div className="container mil-p-120-90">
            <div className="row justify-content-between mil-mb-120">
                <div className="col-xl-5">

                    <h3 className="mil-link mil-accent mil-mb-30">{Data.subtitle}</h3>
                    <h3 className="mil-mb-30 mil-appearance">{Data.title}</h3>

                </div>
                <div className="col-xl-6">

                    <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{Data.description}</p>
                    {/* button */}
                    <div className="mil-appearance">
                        <Link href={Data.more.link} className="mil-link-hover">{Data.more.label}</Link>
                    </div>

                </div>
            </div>
            <div className="row">
                {Data.items.map((item, key) => (
                <div className="col-md-6 col-xl-3" key={`team-item-${key}`}>

                    {/* team card */}
                    <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                        <div className="mil-cover mil-square">
                            <div className="mil-image-frame">
                                {/* portrait */}
                                <img src={item.image} alt={item.name} style={{'objectPosition': 'top'}} />
                            </div>
                        </div>
                        <div className="mil-overlay mil-with-bg mil-text-center">
                            <div className="mil-description">
                                {/* name */}
                                <h5>{item.name}</h5>
                                {/* post */}
                                <span className="mil-link mil-softened-50">{item.role}</span>
                            </div>
                        </div>
                    </div>
                    {/* team card end */}

                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default TeamSection;