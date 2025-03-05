import React from "react";
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
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400"] });

const ps2p = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

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
      { src: "/assets/gytiaward.jpeg", alt: "Award Certificate" },
      { src: "/assets/gyticertificate.jpeg", alt: "Receiving the Award" },
      { src: "/assets/gytigroup.jpeg", alt: "EEG Medical Bed" },
      { src: "/assets/gytimummy.jpeg", alt: "EEG Medical Bed" },
      { src: "/assets/gytiposter.jpeg", alt: "EEG Medical Bed" },
    ],
  },
  {
    title:
      "📝 Patent: System and method to control a pneumatic medical bed using EEG signals",
    description:
      "The intent inspiring this invention is to help paralytic/severely affected patients to control the position of their pneumatic bed by the brain through an EEG device. In this invention, the medical bed is powered by a pneumatic cylinder whose movement is controlled by the patient’s brain. Initially, the patient tries to send a ‘Lift-up’ or ‘Lower-down’ signal to adjust the height of the bed in order to calibrate its ‘comfort pose’. Once the comfort pose is apprehended, the pose of the cylinder is recorded in the application programming interface (API) using the feedback signal from the position sensor mounted on top of the pneumatic cylinder. Later, the patient only has to think of the ‘comfort pose’ to align the position of its hospital bed at the desired comfortable position.",
    links: [
      {
        href: "https://www.researchgate.net/publication/367100263_A_system_and_method_to_control_a_pneumatic_medical_bed_through_electroencephalography_signals",
        text: "💡 View Details",
      },
    ],
    images: [
      { src: "/assets/patent1.jpg", alt: "Award Certificate" },
      { src: "/assets/patent2.jpg", alt: "Award Certificate" },
      { src: "/assets/patent3.jpg", alt: "Award Certificate" },
      { src: "/assets/patent4.jpg", alt: "Award Certificate" },
      { src: "/assets/patent5.jpg", alt: "Award Certificate" },
      { src: "/assets/patent6.jpg", alt: "Award Certificate" },
    ],
  },
  {
    title: "👨‍💻 Winner of India - Australia Circular Economy Hackathon",
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
        src: "/assets/burpp_presentation_page-0001.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0002.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0003.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0004.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0005.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0006.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0007.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0008.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0009.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0010.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0011.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0012.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0013.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0014.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0015.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0016.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0017.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0018.jpg",
        alt: "Award Certificate",
      },
      {
        src: "/assets/burpp_presentation_page-0019.jpg",
        alt: "Award Certificate",
      },
    ],
  },
];

function Achievements() {
  return (
    <section className="mx-10 my-20 w-screen-lg max-w-full">
      <h2 className={"mb-20 text-3xl " + ps2p.className}>Achievements</h2>
      <ul className="space-y-14">
        {achievements.map((achievement, index) => (
          <li key={index}>
            <h2
              className={`${firaCode.className} text-2xl font-bold text-gray-200 mb-2`}
            >
              {achievement.title}
            </h2>
            {achievement.description && (
              <h3
                className={`${jetBrainsMono.className} text-lg font-semibold text-gray-400 mb-4`}
              >
                {achievement.description}
              </h3>
            )}
            {achievement.details && (
              <p
                className={`${inconsolata.className} text-base text-gray-300 leading-relaxed`}
              >
                <strong>{achievement.details}</strong>
              </p>
            )}
            {achievement.links && (
              <div className="mt-4">
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
              <div className="my-5">
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
