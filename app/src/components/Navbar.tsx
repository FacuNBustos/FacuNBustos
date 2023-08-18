import { useEffect, useState } from "react";

const Navbar = ({ text }:any) => {
  const [render, setRender] = useState(false);

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.localStorage.setItem("lang", e.target.value);
    location.reload();
  };

  useEffect(() => {
    if (window.screen.width >= 1280) {
      setRender(true);
    }
  }, [location.reload]);

  return (
    <>
      {render ? (
        <div className="flex items-center justify-start fixed right-[1px] h-[100vh] w-[15vw]">
          <div
            className="flex flex-col gap-1 w-full
                [&>div>a]:font-semi [&>div>a]:font-mono [&>div>a]:text-[18px]"
          >
            <div
              className="flex items-center justify-end gap-[10px]
                [&>div]:hover:w-[30%]  [&>div]:hover:h-[2px] [&>a]:hover:font-bold [&>div]:bg-gray-400"
            >
              <a href="#welcome" className="cursor-pointer">
                {text.home}
              </a>
              <div
                className="bg-red-200 w-[20%] h-[1px] rounded-xl
              transition-all delay-[50ms]"
              />
            </div>
            <div
              className="flex items-center justify-end gap-[10px]
                [&>div]:hover:w-[30%] [&>div]:hover:h-[2px] [&>a]:hover:font-bold [&>div]:bg-gray-400"
            >
              <a href="#about" className="cursor-pointer">
                {text.about}
              </a>
              <div
                className="bg-red-200 w-[20%] h-[1px] rounded-xl
              transition-all delay-[50ms]"
              />
            </div>
            <div
              className="flex items-center justify-end gap-[10px]
                [&>div]:hover:w-[30%] [&>div]:hover:h-[2px] [&>a]:hover:font-bold [&>div]:bg-gray-400"
            >
              <a href="#projects" className="cursor-pointer">{text.projects}</a>
              <div
                className="bg-red-200 w-[20%] h-[1px] rounded-xl
              transition-all delay-[50ms]"
              />
            </div>
            <div
              className="flex items-center justify-end gap-[10px]
                [&>div]:hover:w-[30%] [&>div]:hover:h-[2px] [&>a]:hover:font-bold [&>div]:bg-gray-400"
            >
              <a className="cursor-pointer">{text.contact}</a>
              <div
                className="bg-red-200 w-[20%] h-[1px] rounded-xl
              transition-all delay-[50ms]"
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className="absolute right-[10px] pt-[5px] 
      md:fixed md:bottom-[10px]">
        <div className="flex items-center">
        <p className="flex pr-[5px] font-bold text-[8px] opacity-[60%]
            md:text-[12px]">{text.language}:</p>
            <select defaultValue={localStorage.getItem("lang") || "es"}
            onChange={(e) => handleChangeLanguage(e)}
            className="text-[12px] md:text-[18px] font-medium">
              <option value="es">🇦🇷 es</option>
              <option value="en">🇺🇲 en</option>
            </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
