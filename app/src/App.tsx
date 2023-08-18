import Welcome from "./components/Welcome";
import estadisticas from "../public/assets/estadisticas.webp";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col w-full h-[200vh] bg-[#EEEEE]">
      <Navbar />
      <div className="flex justify-center w-full pt-[20px] md:pt-[10px]">
        <Welcome />
      </div>
      <About />
      <div className="flex justify-center w-full">
        <img
          src={estadisticas}
          alt="estadisticas"
          className="w-[80vw] md:w-[40vw]"
        />
      </div>
      <Projects />
    </div>
  );
}

export default App;
