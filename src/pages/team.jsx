import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import CallToActionSection from "@components/sections/CallToAction";

const Team = () => {

  const Content = {
    "subtitle": "Team Members",
    "title": "Meet Our <br />Creative Team",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga ratione cum maxime ullam id voluptatibus commodi dolorem at, aut, odio, amet quod molestias possimus. Sunt repudiandae ipsam, consectetur repellendus.",
    "items": [
      {
        "image": "img/team/1.png",
        "name": "Emma Newman",
        "role": "Copywriter"
      },
      {
        "image": "img/team/2.png",
        "name": "Emma Newman",
        "role": "Copywriter"
      },
      {
        "image": "img/team/3.png",
        "name": "Emma Newman",
        "role": "Copywriter"
      },
      {
        "image": "img/team/4.png",
        "name": "Emma Newman",
        "role": "Copywriter"
      },
      {
        "image": "img/team/5.png",
        "name": "Emma Newman",
        "role": "Copywriter"
      },
      {
        "image": "img/team/6.png",
        "name": "Emma Newman",
        "role": "Copywriter"
      },
      {
        "image": "img/team/7.png",
        "name": "Emma Newman",
        "role": "Copywriter"
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/3.jpg"} pageTitle={"Team"} />

      {/* team */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">

          <div className="row justify-content-between mil-mb-120">
              <div className="col-lg-5">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.subtitle}</span>
                  <h3 className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : Content.title}} />
              </div>
              <div className="col-lg-6">
                  <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{Content.description}</p>

                  <div className="mil-deco mil-appearance"></div>
              </div>
          </div>

          <div className="row">
              {Content.items.map((item, key) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={`team-item-${key}`}>

                  {/* team card */}
                  <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                      <div className="mil-cover mil-long">
                          <div className="mil-image-frame">
                              {/* portrait */}
                              <img src={item.image} alt={item.name} style={{'objectPosition': 'top' }} />
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
      {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;
