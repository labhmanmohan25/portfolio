import React from "react";
import { Inconsolata, JetBrains_Mono } from "next/font/google";
import { SlSocialLinkedin, SlSocialGithub, SlPhone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manmohanlabh",
    icon: SlSocialLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/labhmanmohan25",
    icon: SlSocialGithub,
  },
  {
    label: "Email",
    href: "mailto:labhmanmohan25@gmail.com",
    icon: CiMail,
    text: "labhmanmohan25@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+919867130540",
    icon: SlPhone,
    text: "+91 9867 130 540",
  },
];

export default function ConnectWithMe() {
  return (
    <section className="my-20 w-full px-10 max-w-[90rem]">
      <div className="text-center">
        <h2 className={"mb-6 text-3xl " + inconsolata.className}>
          Connect with Me
        </h2>
        <div className="text-[var(--light-description)] grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center max-w-4xl mx-auto">
          {links.map(({ label, href, icon: Icon, text }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--background)]/50 transition-colors w-full max-w-[350px] min-w-0 ${jetBrainsMono.className} text-sm`}
            >
              <span className="flex-shrink-0 p-2 rounded-full border border-[var(--foreground)]/30 text-[var(--foreground)]">
                <Icon />
              </span>
              <span className="text-left min-w-0 break-all">
                {text ?? href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center mt-14">
          <div className="resume-cta-wrapper inline-block transition-transform duration-200 hover:scale-105 active:scale-100">
            <a
              href="./Manmohan_Labh_CV_Feb_2025.pdf"
              download="Manmohan_Labh_Resume.pdf"
              className={
                "resume-cta-inner inline-flex items-center justify-center px-10 py-4 sm:px-12 sm:py-5 text-lg sm:text-xl font-semibold " +
                "text-[var(--background)] " +
                jetBrainsMono.className
              }
            >
              Download my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
