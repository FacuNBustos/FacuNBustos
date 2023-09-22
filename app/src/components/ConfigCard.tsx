import { useState } from "react";
import Mode from "../utils/modes.util";
import langs from "../assets/languages.json";

interface props {
  uac: {
    lang: {
      name: string;
      translation: any;
    };
    mode: Mode;
  };
  setUAC: Function;
}

const ConfigCard = (props: props) => {
  const [isOpen, setIsOpen] = useState({
    lang: false,
    mode: false,
  });
  const handleClickInMenu = (e: any) => {
    if (e.target.id == "lang") {
      setIsOpen((prev) => ({ ...prev, lang: !prev.lang, mode: false }));
    } else {
      setIsOpen((prev) => ({ ...prev, mode: !prev.mode, lang: false }));
    }
  };
  const handleChangeLanguage = (e: any) => {
    if (e.target.id == "es") {
      props.setUAC((prev: any) => ({
        ...prev,
        lang: {
          name: "es",
          translation: langs.es,
        },
      }));
    } else {
      props.setUAC((prev: any) => ({
        ...prev,
        lang: {
          name: "en",
          translation: langs.en,
        },
      }));
    }
    setIsOpen((prev) => ({ ...prev, lang: false }));
  };

  const handleChangeMode = (e: any) => {
    if (e.target.id == "default") {
      props.setUAC((prev: any) => ({ ...prev, mode: Mode.DEFAULT }));
    } else {
      props.setUAC((prev: any) => ({ ...prev, mode: Mode.DARK }));
    }
    setIsOpen((prev) => ({ ...prev, mode: false }));
  };

  return (
    <div
      className="fixed z-[100] dark:text-white
        bottom-[10px] right-[10px] md:bottom-[15px] md:right-[15px]"
    >
      <ul
        className="flex justify-end items-center gap-[10px]
            [&>*]:py-[8px] [&>*]:px-[15px] [&>*]:border [&>*]:border-black dark:[&>*]:border-white [&>*]:rounded [&>*]:text-[13px]
            [&_.other]:font-semibold dark:[&_.other]:bg-white/[15%] [&_.other]:bg-black/[5%] [&_.other]:animate-fade [&_.other]:animate-duration-[150ms]"
      >
        {isOpen.lang ? (
          <>
            <li
              id="es"
              className="other"
              onClick={(e) => handleChangeLanguage(e)}
            >
              🇦🇷 Es
            </li>
            <li
              id="en"
              className="other"
              onClick={(e) => handleChangeLanguage(e)}
            >
              🇺🇸 En
            </li>
          </>
        ) : null}
        <li
          id="lang"
          className="text-right cursor-pointer z-1 select-none"
          onClick={(e) => handleClickInMenu(e)}
        >
          {props.uac.lang.translation.configCard.langLabel}:{" "}
          <b>{props.uac.lang.name}</b>
        </li>
      </ul>

      <ul
        className="flex justify-end items-center gap-[10px] pt-[10px]
            [&>*]:py-[8px] [&>*]:px-[15px] [&>*]:border [&>*]:border-black dark:[&>*]:border-white [&>*]:rounded [&>*]:text-[13px]
            [&_.other]:font-semibold dark:[&_.other]:bg-white/[15%] [&_.other]:bg-black/[5%] [&_.other]:animate-fade [&_.other]:animate-duration-[150ms]"
      >
        {isOpen.mode ? (
          <>
            <li
              id="default"
              className="other"
              onClick={(e) => handleChangeMode(e)}
            >
              {props.uac.lang.translation.modes.default}
            </li>
            <li
              id="dark"
              className="other"
              onClick={(e) => handleChangeMode(e)}
            >
              {props.uac.lang.translation.modes.dark}
            </li>
          </>
        ) : null}
        <li
          id="mode"
          className="text-right cursor-pointer z-1 select-none"
          onClick={(e) => handleClickInMenu(e)}
        >
          {props.uac.lang.translation.configCard.modeLabel}:{" "}
          <b>
            {props.uac.mode == Mode.DEFAULT
              ? props.uac.lang.translation.modes.default
              : props.uac.lang.translation.modes.dark}
          </b>
        </li>
      </ul>
    </div>
  );
};

export default ConfigCard;
