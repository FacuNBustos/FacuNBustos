import { useEffect, useState } from "react";

const Navbar = () => {
  const [render, setRender] = useState(false);

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
                [&>div]:hover:w-[30%]  [&>div]:hover:h-[2px] [&>a]:hover:font-bold"
            >
              <a href="#welcome" className="cursor-pointer">Home</a>
              <div className="bg-red-200 w-[20%] h-[1px] rounded-xl bg-gray-500
              transition-all delay-[50ms]" />
            </div>
            <div
              className="flex items-center justify-end gap-[10px]
                [&>div]:hover:w-[30%] [&>div]:hover:h-[2px] [&>a]:hover:font-bold"
            >
              <a href="#about" className="cursor-pointer">About me</a>
              <div className="bg-red-200 w-[20%] h-[1px] rounded-xl bg-gray-500
              transition-all delay-[50ms]" />
            </div>
            <div
              className="flex items-center justify-end gap-[10px]
                [&>div]:hover:w-[30%] [&>div]:hover:h-[2px] [&>a]:hover:font-bold"
            >
              <a className="cursor-pointer">Projects</a>
              <div className="bg-red-200 w-[20%] h-[1px] rounded-xl bg-gray-500
              transition-all delay-[50ms]" />
            </div>
            <div
              className="flex items-center justify-end gap-[10px]
                [&>div]:hover:w-[30%] [&>div]:hover:h-[2px] [&>a]:hover:font-bold"
            >
              <a className="cursor-pointer">Contact</a>
              <div className="bg-red-200 w-[20%] h-[1px] rounded-xl bg-gray-500
              transition-all delay-[50ms]" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
