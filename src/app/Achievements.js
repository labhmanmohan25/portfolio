"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Fira_Code,
  JetBrains_Mono,
  Inconsolata,
  Press_Start_2P,
} from "next/font/google";
import EmblaCarousel from "./carousel/EmblaCarousel";

// Load fonts with Next.js for better performance
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
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

const ps2p = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const OPTIONS = {};

export const achievements = [
  {
    title:
      "🏆 Gandhian Young Technological Innovation (GYTI) Appreciation Award 2023",
    description:
      "The GYTI Awards recognize groundbreaking innovations in science and technology that address societal challenges. This prestigious honor is awarded to young researchers developing impactful solutions in healthcare, sustainability, and engineering.",
    details:
      "Awarded for the invention of an EEG-controlled medical bed, enabling hands-free patient bed adjustments using brain signals.",
    links: [
      { href: "https://gyti.techpedia.in/", text: "📜 About award " },
      {
        href: "https://www.linkedin.com/posts/manmohanlabh_gytiaward2024-neurotechnology-inclusivehealthcare-activity-7261973332755963905-ymGS",
        text: "🔗 Learn More ",
      },
    ],
    images: [
      { src: "./assets/gytiaward.jpeg", alt: "GYTI Award Certificate" },
      { src: "./assets/gyticertificate.jpeg", alt: "Receiving the GYTI Award" },
      {
        src: "./assets/gytigroup.jpeg",
        alt: "Group photo with EEG Medical Bed",
      },
      {
        src: "./assets/gytimummy.jpeg",
        alt: "Demonstration of EEG Medical Bed",
      },
      {
        src: "./assets/gytiposter.jpeg",
        alt: "Poster presentation of EEG Medical Bed",
      },
    ],
  },
  {
    title:
      "📝 Patent: A system and method to control a pneumatic medical bed through electroencephalography (EEG) signals",
    description:
      "The intent inspiring this invention is to help paralytic/severely affected patients to control the position of their pneumatic bed by the brain through an EEG device. In this invention, the medical bed is powered by a pneumatic cylinder whose movement is controlled by the patient’s brain. Initially, the patient tries to send a ‘Lift-up’ or ‘Lower-down’ signal to adjust the height of the bed in order to calibrate its ‘comfort pose’. Once the comfort pose is apprehended, the pose of the cylinder is recorded in the application programming interface (API) using the feedback signal from the position sensor mounted on top of the pneumatic cylinder. Later, the patient only has to think of the ‘comfort pose’ to align the position of its hospital bed at the desired comfortable position.",
    links: [
      {
        href: "https://www.researchgate.net/publication/367100263_A_system_and_method_to_control_a_pneumatic_medical_bed_through_electroencephalography_signals",
        text: "💡 View Details",
      },
    ],
    images: [
      { src: "./assets/patent1.jpg", alt: "Patent Certificate 1" },
      { src: "./assets/patent2.jpg", alt: "Patent Certificate 2" },
      { src: "./assets/patent3.jpg", alt: "Patent Certificate 3" },
      { src: "./assets/patent4.jpg", alt: "Patent Certificate 4" },
      { src: "./assets/patent5.jpg", alt: "Patent Certificate 5" },
      { src: "./assets/patent6.jpg", alt: "Patent Certificate 6" },
    ],
  },
  {
    title: "👨‍💻 Winner Student Team of India Australia Circular Economy (I - ACE) Hackathon 2021",
    description:
      "India Australia Circular Economy Hackathon (I-ACE) is jointly being organized by Atal Innovation Mission, NITI Aayog, Government of India and Commonwealth Scientific and Industrial Research Organisation (CSIRO), Australia to enable the students and startups/MSMEs of both the nations in fostering innovative solutions for the development of a circular economy across the food system value chain with the aim of increasing the long-term health and resilience of our planet, through innovative technology solutions. I-ACE aims to accelerate the development of young and promising students and startups/MSMEs working towards the creation of a sustainable future.",
    details:
      "Awarded in the theme of 'Innovation in food supply chains avoiding waste'.",
    links: [
      {
        href: "https://youtu.be/uCyh2spZ33I",
        text: "▶️ Award Ceremony",
      },
    ],
    images: [
      {
        src: "./assets/burpp_presentation_page-0001.jpg",
        alt: "Hackathon Presentation Slide 1",
      },
      {
        src: "./assets/burpp_presentation_page-0002.jpg",
        alt: "Hackathon Presentation Slide 2",
      },
      {
        src: "./assets/burpp_presentation_page-0003.jpg",
        alt: "Hackathon Presentation Slide 3",
      },
      {
        src: "./assets/burpp_presentation_page-0004.jpg",
        alt: "Hackathon Presentation Slide 4",
      },
      {
        src: "./assets/burpp_presentation_page-0005.jpg",
        alt: "Hackathon Presentation Slide 5",
      },
      {
        src: "./assets/burpp_presentation_page-0006.jpg",
        alt: "Hackathon Presentation Slide 6",
      },
      {
        src: "./assets/burpp_presentation_page-0007.jpg",
        alt: "Hackathon Presentation Slide 7",
      },
      {
        src: "./assets/burpp_presentation_page-0008.jpg",
        alt: "Hackathon Presentation Slide 8",
      },
      {
        src: "./assets/burpp_presentation_page-0009.jpg",
        alt: "Hackathon Presentation Slide 9",
      },
      {
        src: "./assets/burpp_presentation_page-0010.jpg",
        alt: "Hackathon Presentation Slide 10",
      },
      {
        src: "./assets/burpp_presentation_page-0011.jpg",
        alt: "Hackathon Presentation Slide 11",
      },
      {
        src: "./assets/burpp_presentation_page-0012.jpg",
        alt: "Hackathon Presentation Slide 12",
      },
      {
        src: "./assets/burpp_presentation_page-0013.jpg",
        alt: "Hackathon Presentation Slide 13",
      },
      {
        src: "./assets/burpp_presentation_page-0014.jpg",
        alt: "Hackathon Presentation Slide 14",
      },
      {
        src: "./assets/burpp_presentation_page-0015.jpg",
        alt: "Hackathon Presentation Slide 15",
      },
      {
        src: "./assets/burpp_presentation_page-0016.jpg",
        alt: "Hackathon Presentation Slide 16",
      },
      {
        src: "./assets/burpp_presentation_page-0017.jpg",
        alt: "Hackathon Presentation Slide 17",
      },
      {
        src: "./assets/burpp_presentation_page-0018.jpg",
        alt: "Hackathon Presentation Slide 18",
      },
      {
        src: "./assets/burpp_presentation_page-0019.jpg",
        alt: "Hackathon Presentation Slide 19",
      },
    ],
  },
];

function Achievements() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const hasMore = (a) => a.description || a.details;

  return (
    <section className="my-16 w-full px-4 sm:px-6 md:px-10 max-w-screen-lg">
      <h2 className={"mb-10 text-2xl sm:text-3xl " + ps2p.className}>
        Achievements
      </h2>
      <ul className="space-y-8">
        {achievements.map((achievement, index) => (
          <li key={index}>
            <h2
              className={`${firaCode.className} text-base sm:text-lg font-bold text-[var(--light-heading)] mb-1.5`}
            >
              {achievement.title}
            </h2>
            {hasMore(achievement) && (
              <button
                type="button"
                onClick={() =>
                  setExpandedIndex((i) => (i === index ? null : index))
                }
                className={`${jetBrainsMono.className} text-sm font-medium text-[var(--light-description)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--light-heading)]/50 rounded px-0 py-1`}
              >
                {expandedIndex === index ? "Show less" : "Know more"}
              </button>
            )}
            {expandedIndex === index && (
              <div className="mt-2 space-y-2">
                {achievement.description && (
                  <p
                    className={`${jetBrainsMono.className} text-sm sm:text-base font-semibold text-[var(--light-description)] leading-relaxed`}
                  >
                    {achievement.description}
                  </p>
                )}
                {achievement.details && (
                  <p
                    className={`${inconsolata.className} text-sm text-[var(--light-paragraph)] leading-relaxed`}
                  >
                    <strong>{achievement.details}</strong>
                  </p>
                )}
              </div>
            )}
            {achievement.links && (
              <div className="mt-2">
                {achievement.links.map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="award-link"
                    >
                      {link.text}
                    </Link>
                    {linkIndex < achievement.links.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </div>
            )}
            {achievement.images && (
              <div className="my-3">
                <EmblaCarousel slides={achievement.images} options={OPTIONS} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
