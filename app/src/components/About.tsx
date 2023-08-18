//browser
import { useEffect, useState } from "react";
import base_browser from "../../public/assets/browser/about_base.webp";
import perfil_browser from "../../public/assets/browser/about_perfil.webp";
import base_mobile from "../../public/assets/mobile/about_base_mobile.webp";
import perfil_mobile from "../../public/assets/mobile/about_perfil_mobile.webp";

const About = ({ text }: any) => {
  const [render, setRender] = useState(false);
  const [images, setImages] = useState({
    base: "",
    perfil: "",
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 300 && !render) {
      setRender(true);
    }
  });

  useEffect(() => {
    if (window.screen.width < 800) {
      setRender(true);
      setImages({
        base: base_mobile,
        perfil: perfil_mobile,
      });
    } else {
      setImages({
        base: base_browser,
        perfil: perfil_browser,
      });
    }
  }, [location.reload]);
  return (
    <div
      id="about"
      className="flex justify-center items-center w-full pb-[20px]
        md:pt-[50px] md:pb-[50px]"
    >
      <div className="w-[55vw] md:w-[35vw]">
        <p
          className="text-[12px] font-bold
                md:text-[30px]"
        >
          Facundo Bustos Goainochea
        </p>
        <p
          className="text-[10px] font-semibold opacity-[50%]
                md:text-[20px]"
        >
          {text.subtitle}
        </p>
        <p
          className="text-[10px] indent-[6px]
                md:text-[20px] md:indent-[15px]"
        >
          {text.description}
        </p>
      </div>
      <div className="flex items-center relative h-[15vh] w-[15vh] md:h-[40vh] md:w-[19vw]">
        {render ? (
          <>
            <img
              src={images.base}
              alt="base about"
              className="absolute
                    animate-fade animate-delay-[50ms] md:animate-delay-0"
            />
            <img
              src={images.perfil}
              alt="perfil about"
              className="absolute
                    animate-fade-left animate-delay-[60ms] md:animate-delay-[30ms]"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default About;
