import Welcome from "./components/Welcome";
import estadisticas from "../public/assets/estadisticas.webp";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import langs from "../public/translations.json"; 
import { useEffect, useState } from "react";

function App() {
  const [lang, setLang] = useState(langs.es);

  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "es");
    } else if (localStorage.getItem("lang") == "en") {
      setLang(langs.en);
    }
  }, [ location.reload ])

  return (
    <div className="flex flex-col w-full pb-[10vh] bg-[#EEEEE]">
      <Navbar text={ lang.navbar }/>
      <div className="flex justify-center w-full pt-[20px] md:pt-[10px]">
        <Welcome />
      </div>
      <About text={ lang.about } />
      <div className="flex justify-center w-full">
        <img
          src={estadisticas}
          alt="estadisticas"
          className="w-[80vw] md:w-[40vw]"
        />
      </div>
      <Projects text={ lang.projects }/>
    </div>
  );
}

export default App;
