import { HtmlIcon } from "../icons/HtmlIcon";
import { CssIcon } from "../icons/CssIcon";
import { JsIcon } from "../icons/JsIcon";
import { PhpIcon } from "../icons/PhpIcon";
import { GithubFilledIcon } from "../icons/GithubFilledIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { GitIcon } from "../icons/GitIcon";
import { NetlifyIcon } from "../icons/NetlifyIcon";
import { NextIcon } from "../icons/NextIcon";
import { PostgresIcon } from "../icons/PostgresIcon";
import { Prismaicon } from "../icons/PrismaIcon";
import { VercelIcon } from "../icons/VercelIcon";
import { ExpressIcon } from "../icons/ExpressIcon";
import { NodeIcon } from "../icons/NodeIcon";

import { RevealOnScroll } from "../RevealOnScroll";
import { Meteors } from "../ui/Meteors";
import { SpotlightCard } from "../ui/SpotlightCard";
import { BorderGlow } from "../ui/BorderGlow";
import { useState } from "react";

export const Skills = () => {

  const [hovered, setHovered] = useState(false)

  const technologies = [
    { name: "HTML", Icon: HtmlIcon, color: "#E34F26" },
    { name: "CSS", Icon: CssIcon, color: "#663399" },
    { name: "JavaScript", Icon: JsIcon, color: "#F7DF1E" },
    { name: "React.js", Icon: ReactIcon, color: "#61DAFB" },
    { name: "Next.js", Icon: NextIcon, color: "#000000" },
    { name: "Node.js", Icon: NodeIcon, color: "#5FA04E" },
    { name: "Express.js", Icon: ExpressIcon, color: "#000000" },
    { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06B6D4" },
    { name: "PostgreSQL", Icon: PostgresIcon, color: "#4169E1" },
    { name: "Prisma", Icon: Prismaicon, color: "#2D3748" },
    { name: "Vercel", Icon: VercelIcon, color: "#000000" },
    { name: "Git", Icon: GitIcon, color: "#F05032" },
  ];

  return (
    <>
      <section
        className="min-h-[70%] flex items-center justify-center py-20 relative"
        id="skills"
      >
        <Meteors number={20} />
        <RevealOnScroll>
          <div className="mx-auto px-6 lg:px-0 max-w-3xl md:max-w-5xl">
            <div className="mb-11.25 text-center">
              <h2 className="font-bold text-3xl md:text-4xl mb-8">
                Technologies
              </h2>
              <p className="text-lg">
                Languages, frameworks, and tools I work with.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3 md:grid-cols-6">
              {technologies.map(({ name, Icon, color }) => (

                  <BorderGlow
                    edgeSensitivity={40}
                    glowColor="40 80 80"
                    backgroundColor="#0A0F1E"
                    borderRadius={16}
                    glowRadius={59}
                    glowIntensity={2.2}
                    coneSpread={29}
                    animated={false}
                    colors={["#3B82F6", "#6366F1", "#8B5CF6"]}
                    className="p-1 " 
                  >
                    <div className="flex items-center flex-col py-3 px-8 hover:bg-[#0D1425] gap-1 bg-[#0A0F1E] rounded-xl transition-all">
                      <Icon className={`w-10 z-50`} fill={color} />
                      <p className="text-xs text-white/70 ">{name}</p>
                    </div>
                  </BorderGlow>
           
                // <SpotlightCard className="custom-spotlight-card flex items-center justify-center flex-col gap-1" key={name} spotlightColor="#3B82F6" >
                //   <Icon className={`w-10 z-50`} fill={color} />
                //   <p className="text-xs text-white/70 ">{name}</p>
                // </SpotlightCard>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
