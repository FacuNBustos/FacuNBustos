import place_browser from "../assets/browser/A-2_browser.webp";
import person_browser from "../assets/browser/A-1_browser.webp";
import day_background_browser from "../assets/browser/B_broser.webp";
import night_background_browser from "../assets/browser/C_broser.webp";

import place_mobile from "../assets/mobile/A-2_mobile.webp";
import person_mobile from "../assets/mobile/A-1_mobile.webp";
import day_background_mobile from "../assets/mobile/B_mobile.webp";
import night_background_mobile from "../assets/mobile/C_mobile.webp";

import Mode from "../utils/modes.util";
import { useEffect, useState } from "react";

interface props {
  mode: Mode;
  translation: any;
}

const PresentationCard = (props: props) => {

  const [ is_browser, setIs_browser ] = useState<boolean>();
  useEffect(() => {
    if ( window.screen.width <= 700 ) {
      setIs_browser(false);
    } else {
      setIs_browser(true);
    }
    console.log(window.screen.width)
  },[ window.screen.width ])

  return (
    <div className="flex relative h-[40.5vw]">
      <img
        src={(is_browser)? place_browser : place_mobile}
        alt="base place"
        className="w-[90vw] rounded z-[10]"
      />
      <img
        src={(is_browser)? person_browser : person_mobile}
        alt="base person"
        className="absolute w-[7vw] z-[20] bottom-[6%] left-[39.3%] hover:scale-[101%] cursor-pointer"
      />
      {props.mode == Mode.DEFAULT ? (
        <img
          src={(is_browser)? day_background_browser : day_background_mobile}
          alt="day background"
          className="absolute h-[41vw] left-[15%] z-[5]"
        />
      ) : (
        <img
          src={(is_browser)? night_background_browser : night_background_mobile}
          alt="night background"
          className="absolute h-[41vw] left-[15%] z-[5]"
        />
      )}
      <p className="text-[5vw] font-bungee absolute top-[24%] right-[35%] z-[6] dark:text-white">
        Facund0
      </p>
      <p className="text-[5vw] font-bungee absolute top-[36.5%] right-[31%] z-[6] dark:text-white">
        Bustos
      </p>
      <p
        className="text-[1.7vw] font-bold absolute top-[53%] right-[32%] z-[6] text-[#B31312] dark:text-black
            w-[23%] text-center"
      >
        {props.translation.banner.subtitle}
      </p>
    </div>
  );
};

export default PresentationCard;
