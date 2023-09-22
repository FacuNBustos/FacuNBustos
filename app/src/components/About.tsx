import mePhoto from "../assets/browser/about_browser.webp";

interface props {
    translation: any
}

const About = (props:props) => {
  return(
    <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center h-[56vw] md:h-[30vw]">
            <div className="flex justify-center items-center w-[30%] h-[90%]
            md:w-[20%]">
                <img src={mePhoto} alt="photo to me z-[10]"/>
            </div>
            <div className="flex flex-col w-[65%] h-[80%] pl-[10px] md:pl-[3%]
            md:w-[40%]">
                <div className="pb-[8px] md:pb-[15%]">
                    <h2 className="font-bold md:text-[30px] dark:text-white">{props.translation.about.title}</h2>
                    <div className="w-[15%] md:w-[10%] h-[2px] md:h-[3px] bg-[#B31312] dark:bg-[#FFB633]"/>
                </div>
                <div>
                    <p className="text-[12px] md:text-[22px] h-[15px] md:h-[24px] font-bold dark:text-[#EEEEEE]">Facundo Bustos Goainochea</p>
                    <p className="text-[12px] md:text-[22px] dark:text-[#EEEEEE]">Software Developer</p>
                    <p className="text-[10px] md:text-[18px] dark:text-[#FFFFFF]">En pocas palabras, soy un manija de la tecnología. Trasteo constantemente con todo tipo de proyectos tecnológicos, desde robótica, computación o desarrollo de software. Lo cual con los años he adquirido un conocimiento muy variado.</p>
                    <div className="flex items-center md:pl-[6%] gap-[10px] pt-[8px] md:pt-[15px]">
                        <a href="#contact" target="__blank" 
                        className="text-[11px] md:text-[18px] py-1 px-2 md:px-5 font-bold text-white bg-[#B31312] rounded shadow-sm shadow-black select-none
                        dark:bg-[#FFB633] dark:text-black
                        hover:bg-[#B31312]/75 dark:hover:bg-[#FFB633]/[80%]">
                            {props.translation.about.buttoms.contact}
                        </a>
                        <a href="https://www.linkedin.com/in/facundo-bustos-goainochea" target="__blank" 
                        className="text-[11px] md:text-[18px] py-1 px-2 md:px-5 font-semibold border border-[#B31312] rounded text-[#B31312] select-none
                        dark:border-[#FFB633] dark:text-[#FFB633]
                        hover:bg-[#B31312]/[10%] dark:hover:bg-[#FFB633]/[10%]">
                            {props.translation.about.buttoms.linkedin}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default About;
