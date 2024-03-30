import axios from "axios";
import HeaderLayoutDefault from "./LayoutDefault";
import { useState,useEffect } from "react";

const Header = ({ layout, transparent, invert, extraClass }) => {
      
      return (
        <HeaderLayoutDefault
          transparent={transparent}
          invert={invert}
          extarClass={extraClass}
        />
      );
};
export default Header;
