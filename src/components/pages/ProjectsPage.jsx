import { Navbar } from "../Navbar";
import { useState } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Meteors } from "../ui/Meteors";
import { RevealOnScroll } from "../RevealOnScroll";
import { HtmlIcon } from "../icons/HtmlIcon";
import { CssIcon } from "../icons/CssIcon";
import { JsIcon } from "../icons/JsIcon";
import { PhpIcon } from "../icons/PhpIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { ReactIcon } from "../icons/ReactIcon";
import ecoprofit from "/src/assets/images/ecoprofit.png";
import { TailwindIcon } from "../icons/TailwindIcon";
import ibadyetkon from "/src/assets/images/ibadyetkon.png";
import portfoliopic from "/src/assets/images/portfolio.png";
import sjf from "/src/assets/images/sjf-algorithm.png";
import lru from "/src/assets/images/lru-algorithm.png";
import { ExpressIcon } from "../icons/ExpressIcon";
import { NextIcon } from "../icons/NextIcon";
import { color } from "motion";
import { PostgresIcon } from "../icons/PostgresIcon";
import { Prismaicon } from "../icons/PrismaIcon";

export const ProjectsPage = () => {
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

  const ecoProfit = [
    { name: "Next.js", Icon: NextIcon, color: "#000000" },
    { name: "Express", Icon: ExpressIcon, color: "#000000" },
    { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06B6D4" },
    { name: "PostgreSQL", Icon: PostgresIcon, color: "#4169E1" },
    { name: "Prisma ORM", Icon: Prismaicon, color: "#2D3748" },
  ];

  const sjfAlg = [
    { name: "React.js", Icon: ReactIcon, color: "#61DAFB" },
    { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06B6D4" },
  ];

  const lruAlg = [
    { name: "React.js", Icon: ReactIcon, color: "#61DAFB" },
    { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06B6D4" },
  ];

  return (
    <section
      id="allprojects"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <Meteors number={25} />
      <RevealOnScroll>
        <div className="mx-auto px-6 lg:px-0 max-w-3xl md:max-w-6xl">
          <div className="mb-11.25 text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-5">Projects</h2>
            <p className="text-lg">
              A collection of web projects I've built to solve real problems and
              grow as a developer.
            </p>
          </div>

          {/* EcoProfit */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3">
            <div
              className="rounded-lg border border-white/10 overflow-hidden hover:-translate-y-1 transition-all group bg-[#00000025] hover:bg-white/10 relative "
              onClick={() =>
                window.open(
                  "https://github.com/kentvillalun/ecoprofit",
                  "_blank",
                )
              }
            >
              <a
                className="top-3 right-3 absolute bg-[rgba(0,0,0,0.25)] backdrop-blur-lg text-[10px] border border-white/0 flex flex-row gap-1 rounded-md items-center py-0.5 px-2 z-50 hover:bg-[rgba(0,0,0,0.50)] transition-all duration-200 ease-in-out hover:cursor-pointer"
                href="https://ecoprofit-app.vercel.app/barangay/login"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                <p className="text-xs font-medium">Live</p>
              </a>
              <img
                src={ecoprofit}
                alt=""
                className="group-hover:scale-105 transition-all "
              />

              {/* this div will be a tag later on */}
              <div className="p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2 justify-between h-full">
                  <h3 className="text-lg font-bold group-hover:text-blue-500 text-white transition-all ease-in-out">
                    EcoProfit
                  </h3>
                  <p className="text-sm text-white/70 overflow-hidden mb-2">
                    A full-stack PWA that helps barangays manage recyclable
                    material collections, redemption programs, and finances.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {ecoProfit.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        className="flex items-center gap-2 px-2 py-1 rounded-[50px] bg-[#FFFFFF05] text-[10px] border border-[#36363650] justify-center cursor-pointer transition-colors "
                      >
                        <Icon className={`w-4 h-4`} fill={color} />
                        <span className="text-xs font-medium text-white/80">
                          {name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg border border-white/10 overflow-hidden hover:-translate-y-1 transition-all group bg-[#00000025] hover:bg-white/10 relative "
              onClick={() =>
                window.open(
                  "https://github.com/kentvillalun/sjf-scheduling-simulator",
                  "_blank",
                )
              }
            >
              <a
                className="top-3 right-3 absolute bg-[rgba(0,0,0,0.25)] backdrop-blur-lg text-[10px] border border-white/0 flex flex-row gap-1 rounded-md items-center py-0.5 px-2 z-50 hover:bg-[rgba(0,0,0,0.50)] transition-all duration-200 ease-in-out hover:cursor-pointer"
                href="https://sjf-scheduling-simulator.vercel.app/"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                <p className="text-xs font-medium">Live</p>
              </a>
              <img
                src={sjf}
                alt=""
                className="group-hover:scale-105 transition-all "
              />

              {/* this div will be a tag later on */}
              <div className="p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2 justify-between h-full">
                  <h3 className="text-lg font-bold group-hover:text-blue-500 text-white transition-all ease-in-out">
                    SJF Algorithm Simulator
                  </h3>
                  <p className="text-sm text-white/70 overflow-hidden max-h-15 mb-2">
                    An interactive simulator where users input processes with
                    burst times and arrival times, then visualize execution via
                    a Gantt chart with computed metrics like CPU Utilization,
                    throughput, average turnaround time and average waiting
                    time.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {sjfAlg.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        className="flex items-center gap-2 px-2 py-1 rounded-[50px] bg-[#FFFFFF05] text-[10px] border border-[#36363650] justify-center cursor-pointer transition-colors "
                      >
                        <Icon className={`w-4 h-4`} fill={color} />
                        <span className="text-xs font-medium text-white/80">
                          {name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg border border-white/10 overflow-hidden hover:-translate-y-1 transition-all group bg-[#00000025] hover:bg-white/10 relative "
              onClick={() =>
                window.open(
                  "https://github.com/kentvillalun/lru-page-replacement-alg",
                  "_blank",
                )
              }
            >
              <a
                className="top-3 right-3 absolute bg-[rgba(0,0,0,0.25)] backdrop-blur-lg text-[10px] border border-white/0 flex flex-row gap-1 rounded-md items-center py-0.5 px-2 z-50 hover:bg-[rgba(0,0,0,0.50)] transition-all duration-200 ease-in-out hover:cursor-pointer"
                href="https://lru-page-replacement-alg.vercel.app/"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                <p className="text-xs font-medium">Live</p>
              </a>
              <img
                src={lru}
                alt=""
                className="group-hover:scale-105 transition-all "
              />

              {/* this div will be a tag later on */}
              <div className="p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2 justify-between h-full">
                  <h3 className="text-lg font-bold group-hover:text-blue-500 text-white transition-all ease-in-out">
                    LRU Page Replacement Simulator
                  </h3>
                  <p className="text-sm text-white/70 overflow-hidden max-h-15 mb-2">
                    An interactive simulator where users input a page reference
                    string and visualize hit or miss resutls in a step-by-step
                    table format.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {lruAlg.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        className="flex items-center gap-2 px-2 py-1 rounded-[50px] bg-[#FFFFFF05] text-[10px] border border-[#36363650] justify-center cursor-pointer transition-colors "
                      >
                        <Icon className={`w-4 h-4`} fill={color} />
                        <span className="text-xs font-medium text-white/80">
                          {name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg border border-white/10 overflow-hidden hover:-translate-y-1 transition-all group bg-[#00000025] hover:bg-white/10 relative "
              onClick={() =>
                window.open(
                  "https://github.com/kentvillalun/portfolio",
                  "_blank",
                )
              }
            >
              <a
                className="top-3 right-3 absolute bg-[rgba(0,0,0,0.25)] backdrop-blur-lg text-[10px] border border-white/0 flex flex-row gap-1 rounded-md items-center py-0.5 px-2 z-50 hover:bg-[rgba(0,0,0,0.50)] transition-all duration-200 ease-in-out hover:cursor-pointer"
                href="https://kentvillalun.github.io/portfolio/"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                <p className="text-xs font-medium">Live</p>
              </a>
              <img
                src={portfoliopic}
                alt=""
                className="group-hover:scale-105 transition-all "
              />

              {/* this div will be a tag later on */}
              <div className="p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2 justify-between h-full">
                  <h3 className="text-lg font-bold group-hover:text-blue-500 text-white transition-all ease-in-out">
                    Personal Portfolio
                  </h3>
                  <p className="text-sm text-white/70 overflow-hidden mb-2">
                    A modern portfolio website where I display my projects and
                    technical stacks
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {portfolio.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        className="flex items-center gap-2 px-2 py-1 rounded-[50px] bg-[#FFFFFF05] text-[10px] border border-[#36363650] justify-center cursor-pointer transition-colors "
                      >
                        <Icon className={`w-4 h-4`} fill={color} />
                        <span className="text-xs font-medium text-white/80">
                          {name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg border border-white/10 overflow-hidden hover:-translate-y-1 transition-all group bg-[#00000025] hover:bg-white/10 relative "
              onClick={() =>
                window.open(
                  "https://github.com/kentvillalun/iBadyetKon",
                  "_blank",
                )
              }
            >
              {/* <a
                className="top-3 right-3 absolute bg-[rgba(0,0,0,0.25)] backdrop-blur-lg text-[10px] border border-white/0 flex flex-row gap-1 rounded-md items-center py-0.5 px-2 z-50 hover:bg-[rgba(0,0,0,0.50)] transition-all duration-200 ease-in-out hover:cursor-pointer"
                href="https://kentvillalun.github.io/portfolio/"
                target="_blank"
              >
                <ExternalLink size={14} />
                <p className="text-xs font-medium">Live</p>
              </a> */}
              <img
                src={ibadyetkon}
                alt=""
                className="group-hover:scale-105 transition-all "
              />

              {/* this div will be a tag later on */}
              <div className="p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2 justify-between h-full">
                  <h3 className="text-lg font-bold group-hover:text-blue-500 text-white transition-all ease-in-out">
                    iBadyetKon
                  </h3>
                  <p className="text-sm text-white/70 overflow-hidden mb-2">
                    A budgeting web system that helps you track expenses and
                    manage your money with ease.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {iBadyetKon.map(({ name, Icon, color }) => (
                      <span
                        key={name}
                        className="flex items-center gap-2 px-2 py-1 rounded-[50px] bg-[#FFFFFF05] text-[10px] border border-[#36363650] justify-center cursor-pointer transition-colors "
                      >
                        <Icon className={`w-4 h-4`} fill={color} />
                        <span className="text-xs font-medium text-white/80">
                          {name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
