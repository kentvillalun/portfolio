import { CakeIcon } from "../icons/CakeIcon";
import { RevealOnScroll } from "../RevealOnScroll";
import { Meteors } from "../ui/Meteors";
import aboutPic from "/src/assets/images/about-pic.jpg";

export const About = () => {
  return (
    
    <section
      className="min-h-screen flex items-center justify-center py-20 relative"
      id="about"
    >
      <Meteors number={25}/>
      
      <RevealOnScroll>
        
        <div className="mx-auto px-6 max-w-3xl md:max-w-5xl">
          <h2 className="font-bold text-3xl md:text-4xl mb-8 text-center">
            {" "}
            About me{" "}
          </h2>

          <div className="rounded-3xl  md:p-10 md:border-white/10 md:hover:-translate-y-1 transition-transform duration-500 ease-out transform-gpu md:border md:bg-[#00000025] w-full md:mx-0 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-10">
            <div className="w-full md:w-[40%]">
              <img
                src={aboutPic}
                alt="A photo of a guy facing his and wearing polo shirt."
                className="rounded-2xl mb-2 w-full object-cover object-center"
              />
              <div className="flex flex-row items-center justify-center md:justify-start gap-2 transition-all ease-in-out duration-300 ">
                <CakeIcon />
                <p className="mt-1">20 years old</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-[18px] flex-1">
              <p className="">
                Hi! I’m <span className="text-white font-semibold">Kent</span>,
                a 3rd year BS Information Technology student from{" "}
                <span className="text-white font-semibold">Ilocos</span>. I
                serve as the{" "}
                <span className="text-white font-semibold">
                  mayor of my class
                </span>{" "}
                and work as a{" "}
                <span className="text-white font-semibold">graphic artist</span>{" "}
                in our organization—roles that have taught me the importance of{" "}
                <span className="text-white font-semibold">leadership</span>,{" "}
                <span className="text-white font-semibold">collaboration</span>,
                and{" "}
                <span className="text-white font-semibold">
                  creative problem-solving
                </span>
                .
              </p>
              <p className="">
                I’m deeply passionate about{" "}
                <span className="text-white font-semibold">
                  frontend development
                </span>
                . There’s something special about transforming designs into{" "}
                <span className="text-white font-semibold">interactive</span>,{" "}
                <span className="text-white font-semibold">intuitive</span>{" "}
                interfaces that people actually enjoy using.
              </p>
              <p className="">
                Right now, I’m focused on mastering full stack development, but my
                journey doesn’t stop there. I’m working toward becoming a{" "}
                <span className="text-white font-semibold">
                  software engineer
                </span>{" "}
                who can build complete, meaningful digital experiences.
              </p>
              <p className="">
                I believe{" "}
                <span className="text-white font-semibold">great design</span>{" "}
                and <span className="text-white font-semibold">clean code</span>{" "}
                go hand in hand, and I’m excited to grow my skills through every
                project I build.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// I build things I'm proud of — things meant to be used, not just submitted. I'm a BSIT junior from Ilocos with a simple principle: whether it's a class activity or a full project, I give it my all — not just for completion, but for the craft. That's how I make sure I always get something real out of what I build.
// My capstone project, EcoProfit, is proof of that. I realized that if managing recyclables felt more convenient and intuitive, people might actually enjoy it — and that realization turned into a real system, built on real operations in Barangay Beddeng Laud, Vigan City.
// Beyond code, I'm a student leader and the voice of my class. I care just as much about expressing ideas clearly as I do about writing them in clean code — because good communication is what turns individual work into team work.
// Right now I'm focused on finishing EcoProfit strong and securing a good internship. Long term, I'm working toward becoming not just a full stack developer, but a software engineer who builds things worth being proud of — with a team that feels the same way.