import background from "../../public/assets/background.webp";
import person from "../../public/assets/person.webp";
import rockOne from "../../public/assets/rock_one.webp";
import rockTwo from "../../public/assets/rock_two.webp";
import rockThree from "../../public/assets/rock_three.webp";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-start items-center w-[75vw] relative">
      <img
        src={background}
        className="absolute
          animate-fade-up animate-delay-[500ms]"
      />
      <img
        src={person}
        className="absolute z-10
          animate-fade-right animate-delay-[300ms]"
      />
      <img
        src={rockOne}
        className="absolute z-20
          animate-fade-right animate-delay-[300ms]"
      />
      <img
        src={rockTwo}
        className="absolute z-30
          animate-fade-left animate-delay-[100ms]"
      />
      <img
        src={rockThree}
        className="absolute z-40
          animate-fade-left animate-delay-[300ms]"
      />
      <h2
        className="z- rotate-[-6deg] text-[2.2vw] pt-[16%] pl-[3%] font-bungee
          animate-fade animate-delay-[100ms]"
      >
        FACUNDO BUSTOS
      </h2>
      <p
        className="z-51 rotate-[-6deg] pl-[5%] text-[1.5vw] font-semibold
          animate-fade animate-delay-[100ms]"
      >
        Software Developer
      </p>

      <div
        className="flex justify-center w-full h-[4%] z-50 rotate-[-6deg] gap-[2%] pl-[7%] pt-[0.5%]
          animate-fade animate-delay-[100ms]"
      >
        <a
          href="https://github.com/FacuNBustos"
          className="flex justify-end"
          target="__blank"
        >
          <img
            src="https://img.freepik.com/free-icon/github_318-566791.jpg?t=st=1692254135~exp=1692254735~hmac=8cf8c7aa074c67b744b5da95b0d1c8a96bfdc27c6a4b33c2aec3121d1079d74a"
            className="cursor-pointer hover:scale-[1.2]"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/facundo-bustos-goainochea/"
          className="flex"
          target="__blank"
        >
          <img
            src="https://img.freepik.com/free-icon/linkedin_318-246161.jpg?t=st=1692253979~exp=1692254579~hmac=5f91a2cc51b716899640dcb456e443744e19d4213369c211f4a07cd6749ead92"
            className="cursor-pointer hover:scale-[1.2]"
          />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
