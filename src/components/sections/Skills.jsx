import { HtmlIcon } from "../icons/HtmlIcon";
import { CssIcon } from "../icons/CssIcon";
import { JsIcon } from "../icons/JsIcon";
import { PhpIcon } from "../icons/PhpIcon";
import { GithubFilledIcon } from "../icons/GithubFilledIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { GitIcon } from "../icons/GitIcon";
import { NetlifyIcon } from "../icons/NetlifyIcon";
import { RevealOnScroll } from "../RevealOnScroll";
import { Meteors } from "../ui/Meteors";

export const Skills = () => {
  const technologies = [
    { name: "HTML", Icon: HtmlIcon, color: "#E34F26" },
    { name: "CSS", Icon: CssIcon, color: "#663399" },
    { name: "JavaScript", Icon: JsIcon, color: "#F7DF1E" },
    { name: "React.js", Icon: ReactIcon, color: "#61DAFB" },
    { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06B6D4" },
    { name: "Github", Icon: GithubFilledIcon, color: "#181717" },
    { name: "Git", Icon: GitIcon, color: "#F05032" },
    { name: "Netlify", Icon: NetlifyIcon, color: "#00C7B7" },
    { name: "PHP", Icon: PhpIcon, color: "#777BB4" },
  ];

  return (
    <>
      <section
        className="min-h-[50%] flex items-center justify-center py-20 relative"
        id="skills"
      >
        <Meteors number={20}/>
        <RevealOnScroll>
          <div className="mx-auto px-6 max-w-3xl md:max-w-5xl">
            <div className="mb-11.25 text-center">
              <h2 className="font-bold text-3xl md:text-4xl mb-8">
                Technologies
              </h2>

              <div className="relative overflow-hidden px-6">
                <div className="flex animate-marquee ">
                  {[...technologies, ...technologies, ...technologies].map(
                    ({ name, Icon, color, key }) => (
                      <div
                        className="shrink-0 md:shrink py-4 mr-10 group z-50 "
                        key={key}
                      >
                        <div className="">
                          <Icon
                            className={`md:w-24 w-15 opacity-100 md:opacity-45 md:hover:opacity-100 transition-all cursor-pointer`}
                            fill={color}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-25 bg-linear-to-r from-[#060A14] to-transparent z-20" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-25 bg-linear-to-l from-[#060A14] to-transparent z-20" />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
