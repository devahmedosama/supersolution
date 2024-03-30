import Link from "next/link";
import appData from "@data/app.json";

const Footer2 = ( { extraClass } ) => {
  return (
    <footer className="mil-footer-2">
      <div className="container">

          <div className="row flex-sm-row-reverse justify-content-between">
              <div className="col-lg-5 mil-mb-30">
                  <ul className="mil-social mil-hidden-trigger mil-right">
                      {appData.social.map((item, key) => (
                      <li key={`social-item-${key}`}>
                          <a href={item.link} title={item.title} target="_blank">
                              <i className={item.icon} />
                          </a>
                      </li>
                      ))}
                  </ul>
              </div>
              <div className="col-lg-2 mil-text-center mil-mb-30">
                  <Link href="/" className="mil-logo mil-scale-down-trigger">
                      <div className="mil-h5">
                        <span dangerouslySetInnerHTML={{__html : appData.header.logo.text}} />
                        <span className="mil-accent">{appData.header.logo.accent}</span>
                      </div>
                  </Link>
              </div>
              <div className="col-lg-5 mil-mb-30">
                  <p className="mil-text-sm mil-softened-60">{appData.footer.copy}</p>
              </div>
          </div>

      </div>
  </footer>
  );
};
export default Footer2;
