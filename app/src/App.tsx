import Welcome from "./components/Welcome";
import estadisticas from "../public/assets/estadisticas.png";
import wallet from "../public/assets/wallet.png";
import copyshop from "../public/assets/copyshop.png";

function App() {

  return (
    <div className="w-screen h-screen bg-[#EEEEE]">
      <div className="flex justify-center w-full pt-[20px]">
        <Welcome />
      </div>
      <div className="flex justify-center w-full">
        <img src={estadisticas}  className="w-[50%]"/>
      </div>
      <div className="flex justify-center w-full py-[20px]">
        <hr className="w-[70%]"/>
      </div>
      <div className="flex flex-col items-center w-full pb-[100px]">
        <h4 className="w-[70%] text-[22px] font-semibold">🚀 Latest Projects</h4>
        <div className="flex justify-center w-[70%] gap-[10px]">
          <img src={copyshop} alt="copyshop" className="w-[30%] rounded" />
          <img src={wallet} alt="wallet" className="w-[30%] rounded"/>
        </div>
      </div>
    </div>
  )
}

export default App
