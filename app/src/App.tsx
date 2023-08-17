import Welcome from "./components/Welcome";
import estadisticas from "../public/assets/estadisticas.webp";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  window.onload = () => {
    setLoading(true);
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-[#EEEEE]">
      <div className="flex justify-center w-full">
        {
          (loading)
          ? <Welcome />
          : <div className="w-full h-[50vw]"/>
        }
      </div>
      <div className="flex justify-center w-full">
        <img src={estadisticas} alt="estadisticas" className="w-[45vw]"/>
      </div>
    </div>
  );
}

export default App;
