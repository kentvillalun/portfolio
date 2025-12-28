import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { MailIcon } from "../icons/MailIcon";
import emailjs from "emailjs-com";
import { Meteors } from "../ui/Meteors";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      className="min-h-screen flex justify-center items-center py-20 relative"
      id="contact"
    >
      <Meteors number={25}/>
      <RevealOnScroll>
        <div className="mx-auto px-6 max-w-3xl md:max-w-5x">
          <div className="text-center mb-11.25 ">
            <h2 className="font-bold text-3xl md:text-4xl mb-5">
              Get in Touch
            </h2>
            <p className="text-lg">
              Have a project in mind or just want to connect? I’d love to hear
              from you.
            </p>
          </div>

          <form
            className="space-y-6 md:px-16.5 md:py-9.5 md:bg-[#00000025] md:border-white/10 md:border rounded-2xl bg-[#00000000] border-0 transition-colors "
            onSubmit={handleSubmit}
          >
            {/* Name input */}
            <div className="relative text-center flex flex-col gap-1">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={formData.name}
                className="w-full border border-white/10 bg-[#FFFFFF05] focus:outline-none px-4 py-3 rounded-lg focus:border-blue-500 transition-colors focus:bg-blue-500/5 "
                placeholder="Enter your name"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                autoComplete="given-name"
              />
            </div>

            {/* Email input */}
            <div className="relative text-center flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                className="w-full border border-white/10 bg-[#FFFFFF05] focus:outline-none px-4 py-3 rounded-lg focus:border-blue-500 transition-colors focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                autoComplete="off"
              />
            </div>

            {/* message input */}
            <div className="relative text-center flex flex-col gap-1">
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                className="w-full border border-white/10 bg-[#FFFFFF05] focus:outline-none px-4 py-3 rounded-lg focus:border-blue-500 transition-colors focus:bg-blue-500/5"
                rows={5}
                value={formData.message}
                placeholder="Enter your message"
                required
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <input type="hidden" name="reply_to" value={formData.email} />
            </div>

            {/* Contact directly with social media accounts */}
            <div className="text-center mb-11.5">
              <div className="mb-4.25">Or reach me directly:</div>
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
                  href="mailto:villalunkent03@gmail.com"
                  target="_blank"
                  className="p-3.5 rounded-lg bg-linear-to-b from-[#437BFF] to-[#A251FF] transition-transform hover:scale-110 hover:shadow-lg"
                >
                  <MailIcon />
                </a>
              </div>
            </div>

            {/* button */}
            <button className="w-full  bg-[#3B82F6] focus:outline-none px-4 py-3 rounded-lg hover:bg-[#0876e4] cursor-pointer hover:-translate-y-0.5 transition-all hover:shadow-[0,0,15px_rgba(59_130_246_0.4)]">
              Submit
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
