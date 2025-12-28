import { RevealOnScroll } from "../RevealOnScroll";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { MailIcon } from "../icons/MailIcon";

export const Footer = () => {
  return (
    <section className="min-h-50% bg-[#060A14] flex py-10 justify-center border border-t-white/10 border-r-0 border-l-0 border-b-0 items-center">
      <RevealOnScroll>
        <div className="">
          <div className="flex md:flex-row mx-auto px-6 max-w-3xl md:max-w-5xl gap-10 justify-between flex-col border-b-white/10 border border-t-0 border-r-0 border-l-0 mb-3">
            <div className="">
              <div className="mb-4.75">
                <h3 className="font-bold text-[24px] mb-1.5">Kent</h3>
                <p className="max-w-sm">
                  Building web experiences with React and Tailwind CSS
                </p>
              </div>
              <div className="">
                <h3 className="font-medium text-[18px] mb-5">Connect</h3>
                <div className="mb-11.5">
                  <div className="flex flex-row gap-5">
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
                      href="mailto:villalunkent03@gmail.com"
                      target="_blank"
                      className="p-3.5 rounded-lg bg-linear-to-b from-[#437BFF] to-[#A251FF] transition-transform hover:scale-110 hover:shadow-lg"
                    >
                      <MailIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-10">
                <h3 className="font-medium text-[16px] mb-4">Quick Links</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="#about"
                    className="text-[15px] hover:font-medium text-[#94A3B8] hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-[15px] hover:font-medium text-[#94A3B8] hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-[15px] hover:font-medium text-[#94A3B8] hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="text-[15px] hover:font-medium text-[#94A3B8] hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#64748B] text-[14px] flex flex-col md:flex-row justify-between gap-3 items-center">
            <p className="">&copy; 2025 Kent Villalun. All rights reserved</p>
            <p className="">Built with React and Tailwind CSS</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
