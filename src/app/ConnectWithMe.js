import React from "react";
import { Inconsolata, JetBrains_Mono } from "next/font/google";
import { SlSocialLinkedin, SlSocialGithub, SlPhone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import "./styles.css"; // Import the CSS file

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

function ConnectWithMe() {
  return (
    <section className="my-20 w-full px-10 max-w-screen-lg text-center ">
      <h2 className={"mb-10 text-3xl " + inconsolata.className}>
        Connect with Me @
      </h2>
      <div className="text-[var(--light-description)] grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <div className="flex items-center w-100 justify-center lg:justify-start p-3">
          <div className="border-2 font-bold rounded-full p-2 mr-4 text-[var(--foreground)] bg-[var(--background)] rotate-icon">
            <SlSocialLinkedin />
          </div>
          <div className="flex flex-col items-start w-[350px] lg:w-full">
            <p
              className={`${inconsolata.className} text-lg font-semibold text-left`}
            >
              <strong>Where I pretend to be professional</strong>
            </p>
            <a
              className={`${jetBrainsMono.className} text-sm break-all text-left`}
              href="https://www.linkedin.com/in/manmohanlabh"
              target="_blank"
            >
              https://www.linkedin.com/in/manmohanlabh
            </a>
          </div>
        </div>

        <div className="flex items-center w-100 justify-center lg:justify-start p-3">
          <div className="border-2 font-bold rounded-full p-2 mr-4 text-[var(--foreground)] bg-[var(--background)] rotate-icon">
            <SlSocialGithub />
          </div>
          <div className="flex flex-col items-start w-[350px] lg:w-full">
            <p
              className={`${inconsolata.className} text-lg font-semibold text-left`}
            >
              <strong>Where my code sleeps more than I do</strong>
            </p>
            <a
              className={`${jetBrainsMono.className} text-sm break-all text-left`}
              href=" https://github.com/labhmanmohan25"
              target="_blank"
            >
              https://github.com/labhmanmohan25
            </a>
          </div>
        </div>

        <div className="flex items-center w-100 justify-center lg:justify-start p-3">
          <div className="border-2 font-bold rounded-full p-2 mr-4 text-[var(--foreground)] bg-[var(--background)] rotate-icon">
            <CiMail />
          </div>
          <div className="flex flex-col items-start w-[350px] lg:w-full">
            <p
              className={`${inconsolata.className} text-lg font-semibold text-left`}
            >
              <strong>Where I pretend 'mark as unread' is a to-do list</strong>
            </p>
            <a
              className={`${jetBrainsMono.className} text-sm break-all text-left`}
              href="mailto:labhmanmohan25@gmail.com"
              target="_blank"
            >
              labhmanmohan25@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center w-100 justify-center lg:justify-start p-3">
          <div className="border-2 font-bold rounded-full p-2 mr-4 text-[var(--foreground)] bg-[var(--background)] rotate-icon">
            <SlPhone />
          </div>
          <div className="flex flex-col items-start w-[350px] lg:w-full">
            <p
              className={`${inconsolata.className} text-lg font-semibold text-left`}
            >
              <strong>
                Where I'm available for offers, memes, and side quests
              </strong>
            </p>
            <a
              className={`${jetBrainsMono.className} text-sm break-all text-left`}
              href="tel:+919867130540"
              target="_blank"
            >
              +91 9867 130 540
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectWithMe;
