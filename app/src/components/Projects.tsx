const Projects = ({ text }:any) => {
  return (
    <div id="projects"
      className="flex items-center flex-col w-full mt-[20px]
        md:mt-[50px]"
    >
      <div
        className="flex flex-col w-[85vw]
            md:w-[55vw]"
      >
        <h3
          className="text-[13px] font-bold
                md:text-[30px]"
        >
          🚀 { text.title }
        </h3>
        <div className="w-full h-[20vh] bg-red-200
        md:h-[40vh]">

        </div>

        <div className="w-full h-[20vh] bg-green-200
         md:h-[40vh]">

        </div>

        <div className="w-full h-[20vh] bg-blue-200
        md:h-[40vh]">

        </div>
      </div>
    </div>
  );
};

export default Projects;
