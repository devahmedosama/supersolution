import Data from "@data/sections/subscribe.json";
import appData from "@data/app.json";

const SubscribeSection = ( { bgColorClass } ) => {
  return (
    <div className={ bgColorClass ? `mil-subscribe-1 ${bgColorClass}` : "mil-subscribe-1"}>
        <div className="container mil-p-0-90">
            <form action={appData.settings.mailchimp.url} method="post" target="_blank">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-2">

                        <h4 className="mil-appearance mil-mb-30">{Data.title}</h4>

                    </div>
                    <div className="col-lg-6">

                        {/* email field */}
                        <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                            <input className="mil-link" type="email" name="EMAIL" required />
                            <label className="mil-link">Your Email</label>
                            <span />
                        </div>

                        <input type="hidden" name={appData.settings.mailchimp.key} />
                    </div>
                    <div className="col-lg-2">

                        {/* button */}
                        <div className="mil-appearance"><button type="submit" className="mil-button mil-button-md mil-scale-down-trigger mil-mb-30">Subscribe</button></div>

                    </div>
                </div>
                
            </form>
        </div>
    </div>
  );
};

export default SubscribeSection;