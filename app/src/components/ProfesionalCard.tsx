
const ProfesionalCard = () => {
    return (
        <div className="grid grid-rows-2 min-h-[60vh] md:grid-rows-1 md:grid-cols-2">

            <div className="flex flex-col p-2 md:p-4">
                <div>
                    <h2 className="font-bold md:text-[30px] dark:text-white">Experiencia laboral</h2>
                    <div className="w-[15%] md:w-[10%] h-[2px] md:h-[3px] bg-[#B31312] dark:bg-[#FFB633]"/>
                </div>

            </div>


            <div className="flex flex-col p-2 md:p-4">
                <div>
                    <h2 className="font-bold md:text-[30px] dark:text-white">Habilidades</h2>
                    <div className="w-[15%] md:w-[10%] h-[2px] md:h-[3px] bg-[#B31312] dark:bg-[#FFB633]"/>
                </div>
            </div>

        </div>
    )
}

export default ProfesionalCard