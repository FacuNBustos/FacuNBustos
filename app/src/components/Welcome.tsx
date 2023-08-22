// Browser
import base_browser from "../../public/assets/browser/base_browser.webp";
import person_browser from "../../public/assets/browser/person_browser.webp";
import rockOne_browser from "../../public/assets/browser/rock_one_browser.webp";
import rockTwo_browser from "../../public/assets/browser/rock_two_browser.webp";
import rockThree_browser from "../../public/assets/browser/rock_three_browser.webp";

// Mobile
import base_mobile from "../../public/assets/mobile/base_mobile.webp";
import person_mobile from "../../public/assets/mobile/person_mobile.webp";
import rockOne_mobile from "../../public/assets/mobile/rock_one_mobile.webp";
import rockTwo_mobile from "../../public/assets/mobile/rock_two_mobile.webp";
import rockThree_mobile from "../../public/assets/mobile/rock_three_mobile.webp";

import { useEffect, useState } from "react";

const Welcome = () => {
  const [images, setImages] = useState({
    base: "",
    person: "",
    rock_one: "",
    rock_two: "",
    rock_three: "",
  });

  useEffect(() => {
    if (window.screen.width > 768) {
      setImages({
        base: base_browser,
        person: person_browser,
        rock_one: rockOne_browser,
        rock_two: rockTwo_browser,
        rock_three: rockThree_browser,
      });
    } else {
      setImages({
        base: base_mobile,
        person: person_mobile,
        rock_one: rockOne_mobile,
        rock_two: rockTwo_mobile,
        rock_three: rockThree_mobile,
      });
    }
  }, [location.reload]);

  return (
    <div
      id="welcome"
      className="flex flex-col justify-start items-center pt-[10px] w-[85%] h-[30vh] relative
    md:w-[80vw] md:h-[85vh] pt-0"
    >
      <img
        src={images.base}
        className="absolute
          animate-fade-up animate-delay-[500ms] w-[99%]"
      />
      <img
        src={images.person}
        className="absolute z-10
          animate-fade-right animate-delay-[300ms] w-[99%]"
      />
      <img
        src={images.rock_one}
        className="absolute z-20
          animate-fade-right animate-delay-[300ms] w-[99%]"
      />
      <img
        src={images.rock_two}
        className="absolute z-30
          animate-fade-left animate-delay-[100ms] w-[99%]"
      />
      <img
        src={images.rock_three}
        className="absolute z-40
          animate-fade-left animate-delay-[300ms] w-[99%]"
      />
      <h2
        className="rotate-[-6deg] text-[2.5vw] pt-[16%] pl-[3%] font-bungee
          md:text-[2.2vw]
          animate-fade animate-delay-[100ms]"
      >
        FACUNDO BUSTOS
      </h2>
      <p
        className="rotate-[-6deg] pl-[5%] text-[2vw] font-semibold
          md:text-[1.6vw]
          animate-fade animate-delay-[100ms]"
      >
        Software Developer
      </p>

      <div
        className="flex justify-center w-full h-[4%] z-50 rotate-[-6deg] gap-[2%] pl-[7%] mt-[2px]
        md:h-[3.5%] md:mt-[10px]
          animate-fade animate-delay-[100ms]"
      >
        <a
          href="https://github.com/FacuNBustos"
          className="flex justify-end"
          target="__blank"
        >
          <img
            src="https://img.freepik.com/free-icon/github_318-566791.jpg?t=st=1692254135~exp=1692254735~hmac=8cf8c7aa074c67b744b5da95b0d1c8a96bfdc27c6a4b33c2aec3121d1079d74a"
            className="cursor-pointer hover:scale-[1.2]"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/facundo-bustos-goainochea/"
          className="flex"
          target="__blank"
        >
          <img
            src="https://img.freepik.com/free-icon/linkedin_318-246161.jpg?t=st=1692253979~exp=1692254579~hmac=5f91a2cc51b716899640dcb456e443744e19d4213369c211f4a07cd6749ead92"
            className="cursor-pointer hover:scale-[1.2]"
          />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
