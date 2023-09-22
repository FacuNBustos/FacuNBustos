import { useEffect, useState } from "react";
import Mode from "./utils/modes.util";
import langs from "./assets/languages.json";
import ConfigCard from "./components/ConfigCard";
import PresentationCard from "./components/PresentationCard";
import About from "./components/About";
import ProfesionalCard from "./components/ProfesionalCard";
import ProjectsCard from "./components/Projects";
import EducationCard from "./components/EducationCard";
import Footer from "./components/Footer";

function App() {
  const [uac, setUAC] = useState({
    lang: {
      name: "es",
      translation: langs.es,
    },
    mode: Mode.DEFAULT,
  });

  const handleChangeUAC = (value: React.SetStateAction<any>) => {
    setUAC(value);
  };

  useEffect(() => {
    const JSONconfig = localStorage.getItem("uac");
    if (!JSONconfig) {
      const config = {
        lang: window.navigator.language.split("-")[0],
        mode: Mode.DEFAULT,
      };
      localStorage.setItem("uac", JSON.stringify(config));
    } else {
      const userConfig = JSON.parse(JSONconfig);
      if (userConfig.lang == "es")
        setUAC((prev) => ({
          ...prev,
          lang: { name: "es", translation: langs.es },
        }));
      else
        setUAC((prev) => ({
          ...prev,
          lang: { name: "en", translation: langs.en },
        }));

      if (userConfig.mode == Mode.DEFAULT)
        setUAC((prev) => ({ ...prev, mode: Mode.DEFAULT }));
      else setUAC((prev) => ({ ...prev, mode: Mode.DARK }));
    }
  }, [location.reload]);

  useEffect(() => {
    const config = {
      lang: uac.lang.name,
      mode: uac.mode,
    };
    localStorage.removeItem("uac");
    localStorage.setItem("uac", JSON.stringify(config));
  }, [uac]);

  return (
    <main data-theme={uac.mode}>
      <div className="flex flex-col bg-[#F0F5F9] dark:bg-[#2c2c2c]">

        <ConfigCard uac={uac} setUAC={handleChangeUAC} />

        <section className="flex justify-center bg-transparent md:pt-[2rem] pt-[1.2rem]">
          <PresentationCard
            mode={uac.mode}
            translation={uac.lang.translation}
          />
        </section>

        <section className="bg-[#C9D6DF] dark:bg-[#313131] mt-[20px] md:mt-[50px]">
          <About translation={uac.lang.translation}/>
        </section>

        <section>
          <ProfesionalCard />
        </section>

        <section className="bg-[#C9D6DF] dark:bg-[#313131]">
          <ProjectsCard />
        </section>

        <section>
          <EducationCard />
        </section>

        <Footer />

      </div>
    </main>
  );
}

export default App;
