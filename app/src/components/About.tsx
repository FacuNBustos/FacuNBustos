//browser
import base_browser from "../../public/assets/browser/about_base.webp";
import perfil_browser from "../../public/assets/browser/about_perfil.webp";

const About  = () => {
    return (
        <div id="about" 
        className="flex justify-center items-center w-full pb-[20px]
        md:pt-[50px] md:pb-[50px]">
            <div className="w-[55vw] md:w-[35vw]">
                <p className="text-[12px] font-bold
                md:text-[30px]">Facundo Bustos Goainochea</p>
                <p className="text-[10px] font-semibold opacity-[50%]
                md:text-[20px]">Software Developer</p>
                <p className="text-[10px] indent-[6px]
                md:text-[20px] md:indent-[15px]">Especializado en el desarrollo de soluciones backend.
                    Tengo 23 años y estoy recibido de Técnico Superior en Programación en la Universidad Tecnológica Nacional - Reg. San Francisco.
                </p>
            </div>
            <div className="flex relative">
                <img src={base_browser} alt="base about" className="h-[15vh] w-[30vw]
                md:h-[40vh] md:w-[20vw]
                animate-fade animate-delay-[100ms]" />
                <img src={perfil_browser} alt="perfil about" className="absolute h-[15vh] w-[30vw]
                md:h-[40vh] md:w-[20vw]
                animate-fade-left animate-delay-[150ms]"/>
            </div>
        </div>
    )
}

export default About;