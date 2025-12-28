import { HtmlIcon } from "../icons/HtmlIcon";
import { CssIcon } from "../icons/CssIcon";
import { JsIcon } from "../icons/JsIcon";
import { PhpIcon } from "../icons/PhpIcon";
import { GithubFilledIcon } from "../icons/GithubFilledIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { GitIcon } from "../icons/GitIcon";
import { NetlifyIcon } from "../icons/NetlifyIcon";

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
      <div className="min-h-[50%] flex items-center justify-center py-20">
        <div className="mx-auto px-6 max-w-3xl md:max-w-5xl">
          <div className="mb-11.25 text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-5">
              Technologies
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
