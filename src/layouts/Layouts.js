import { useEffect } from "react";
import { scrollAnimation } from "../common/scrollAnims";
import { countersAnimation } from "../common/counters";
import { navigation } from "../common/navigation";
import { formInputs } from "../common/utilits";

import Footer from "./footers/Index";
import Header from "./headers/Index";
import Cursor from "./cursor/Index";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  footerBg,
  footerInst,
  transparent,
  invert,
  extraClass,
}) => {
  useEffect(() => {
    scrollAnimation();
    navigation();
    formInputs();
  }, []);

  return (
    <div id="smooth-wrapper" className="mil-wrapper">
      <Cursor />
      
      {!noHeader && (
        <Header
          layout={header}
          transparent={transparent}
          invert={invert}
          extraClass={extraClass}
        />
      )}

      <div id="swupMain" className="mil-main-transition">
        <div id="smooth-content" className="mil-content">
          {children}
        </div>
      </div>
      
      {!noFooter && <Footer layout={footer} bg={footerBg} instagram={footerInst} />}
    </div>
  );
};
export default Layouts;
