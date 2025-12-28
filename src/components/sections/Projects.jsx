import { HtmlIcon } from "../icons/HtmlIcon";
import { CssIcon } from "../icons/CssIcon";
import { JsIcon } from "../icons/JsIcon";
import { PhpIcon } from "../icons/PhpIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { RevealOnScroll } from "../RevealOnScroll";
import { Meteors } from "../ui/Meteors";
export const Projects = () => {
  const iBadyetKon = [
    { name: "HTML", Icon: HtmlIcon, color: "#E34F26" },
    { name: "CSS", Icon: CssIcon, color: "#663399" },
    { name: "JavaScript", Icon: JsIcon, color: "#F7DF1E" },
    { name: "PHP", Icon: PhpIcon, color: "#777BB4" },
  ];

  const portfolio = [
    { name: "React.js", Icon: ReactIcon, color: "#61DAFB" },
    { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06B6D4" },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <Meteors number={25}/>
      <RevealOnScroll>
        <div className="mx-auto px-6 max-w-3xl md:max-w-5xl">
          <div className="mb-11.25 text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-5">
              Featured Projects
            </h2>
            <p className="text-lg">
              A selection of projects I've built to practice and showcase my
              skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/10 hover:border-blue-900 overflow-hidden hover:-translate-y-1 transition-all group bg-[#00000025]">
              <img
                src="../src/assets/images/ibadyetkon.png"
                alt=""
                className="group-hover:scale-105 transition-all "
              />
              {/* this div will be a tag later on */}
              <div className="p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">iBadyetKon</h3>
                  <p>
                    A smart budgeting web app that helps you track expenses and
                    manage your money with ease.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {iBadyetKon.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-[50px] bg-[#FFFFFF05] text-[10px] border border-[#36363650] justify-center cursor-pointer hover:bg-[#FFFFFF10] transition-colors"
                      >
                        <Icon className={`w-2.5 h-2.5`} fill={color} />
                        <span className="">{name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row gap-2 justify-end">
                  <a
                    href=""
                    className="py-3 px-5 bg-[#3B82F6] hover:bg-[#0876e4] rounded-lg transition-all"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/kentvillalun/iBadyetKon"
                    className="rounded-lg bg-[#FFFFFF05] py-3 px-4 border border-[#36363650] hover:bg-[#FFFFFF10] transition-colors"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 hover:border-blue-900 overflow-hidden hover:-translate-y-1 transition-all group bg-[#00000025]">
              <img
                src="../src/assets/images/portfolio.png"
                alt=""
                className="group-hover:scale-105 transition-all "
              />
              {/* this div will be a tag later on */}
              <div className="p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-xl font-bold">Personal Portfolio</h3>
                  <p>
                    A modern portfolio website where I display my projects and
                    technical stack.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {portfolio.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-[50px] bg-[#FFFFFF05] text-[10px] border border-[#36363650] justify-center cursor-pointer hover:bg-[#FFFFFF10] transition-colors"
                      >
                        <Icon className={`w-2.5 h-2.5`} fill={color} />
                        <span className="">{name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row gap-2 justify-end">
                  <a
                    href=""
                    className="py-3 px-5 bg-[#3B82F6] hover:bg-[#0876e4] rounded-lg transition-all"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/kentvillalun/portfolio"
                    className="rounded-lg bg-[#FFFFFF05] py-3 px-4 border border-[#36363650] hover:bg-[#FFFFFF10] transition-colors"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
