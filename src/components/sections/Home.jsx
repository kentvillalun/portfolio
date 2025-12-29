import { DownloadIcon } from "../icons/DownloadIcon";
import { MailIcon } from "../icons/MailIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { useTypewriter } from "react-simple-typewriter";
import { RevealOnScroll } from "../RevealOnScroll";


export const Home = ({ isLoaded }) => {
  const [text] = useTypewriter({
    words: ["n aspiring developer.", " student leader.", " creative designer."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#060A14]"
    >
      
      {/* Gradient Background */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 md:-translate-y-1/3 w-screen h-screen gradient-background transition-all duration-1000 ease-out pointer-events-none
          ${
            isLoaded
              ? "opacity-100 scale-100 md:blur-[150px] blur-[80px] gradient-float"
              : "opacity-0 scale-75 md:blur-[250px] blur-[120px]"
          }
        `}
      ></div>

      <RevealOnScroll>
        
        <div className="z-10 text-center flex flex-col gap-9.25 mx-auto">
          <div className="">
            <span className="text-xl md:text-2xl transition-all">Hey! I'm</span>
            <h1 className="text-5xl font-bold md:text-7xl transition-all">
              Kent —
            </h1>
            <h2 className="md:text-4xl text-2xl transition-all">
              a{text} <span className="animate-blink ml-1"> | </span>
            </h2>
          </div>

          <p className="mx-4 max-w-136.75 text-md md:text-lg transition-all text-gray-400">
            3rd year BS Information Technology student passionate about building
            web experiences.
          </p>

          <div className="md:flex jusftify-center items-center gap-11 mx-auto hidden transition-all duration-300 ease-in-out">
            <button className="flex flex-row gap-3.25 border border-white py-4 px-5.5 rounded-lg cursor-pointer transform hover:-translate-y-0.5 hover:shadow-[0,0,15px_rgba(59, 130, 246, 0.5)] transition-all font-semibold">
              <DownloadIcon />
              <span className="">Download Resume</span>
            </button>
            <a href="#contact" className="flex flex-row gap-3.25 py-4 px-10.5 rounded-lg bg-[#3B82F6] hover:bg-[#0876e4] transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-[0,0,15px_rgba(59, 130, 246, 0.5)] font-semibold">
              <MailIcon />
              <span className="">Get in Touch</span>
            </a>
          </div>

          <div className="flex flex-row justify-center gap-5">
            <a
              href="https://github.com/kentvillalun"
              target="_blank"
              className="p-3.5 bg-[#0D2D5C] rounded-lg transition-transform hover:scale-110 hover:shadow-lg"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/kent-villalun-849b25366"
              target="_blank"
              className="p-3.5 rounded-lg bg-[#0A66C2] transition-transform hover:scale-110 hover:shadow-lg "
            >
              <LinkedinIcon />
            </a>
            <a
              href="#contact"
              className="p-3.5 rounded-lg bg-linear-to-b from-[#437BFF] to-[#A251FF] transition-transform hover:scale-110 hover:shadow-lg"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
