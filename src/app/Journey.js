import React from "react";
import {
  Fira_Code,
  JetBrains_Mono,
  Inconsolata,
  Press_Start_2P,
} from "next/font/google";

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

const journey = [
  {
    title: "Innovaccer Inc., India",
    role: "Software Development Engineer 2 Frontend",
    duration: {
      start: "06/2024",
      end: "Present",
    },
    experience: [
      "Led the License Manager platform mid-project, consolidating clinical assets, data assets, provider hierarchies, and value-based care contracts. Streamlined operations for 50+ organizations, boosting efficiency and user experience by 30%.",
      "Designed and implemented the Patient Reference feature, enabling 1,600+ healthcare organizations across the U.S. to securely share patient data within chat on web and laptop applications. Integrated advanced search filters and APIs, cutting data-sharing time by 70%. The feature streamlined workflows, improving communication and accelerating patient care services.",
      "Strengthened code quality by conducting rigorous testing and debugging, reducing the bug rate by 15%.",
      "Engineered and maintained three microservices within the Microfrontend architecture using React and a Backend-for-Frontend (BFF) approach, ensuring modular and scalable application development.",
      "Optimized the codebase by replacing Redux with custom hooks and Context, reducing code size by 25% and decreasing the bug rate by 15%.",
    ],
  },
  {
    title: "I’mbesideyou Inc., Japan",
    role: "Software Development Engineer 2 Full Stack",
    duration: {
      start: "08/2023",
      end: "06/2024",
    },
    experience: [
      "Architected scalable front-end solutions and seamlessly integrated them with back-end systems, enhancing UI/UX workflows across multiple products.",
      "Built and optimized front-end and back-end infrastructure using AWS CDK, provisioning databases, VPCs, and S3 buckets, boosting deployment efficiency by 30%.",
      "Accelerated front-end performance by reducing graph loading time from 1.5 minutes to under 1 second. Integrated ML models and optimized backend systems, increasing overall user engagement by 20%.",
      "Conducted in-depth Product-Market Fit (PMF) research, driving strategic product and development decisions for both front-end and back-end features.",
    ],
  },
  {
    title: "I’mbesideyou Inc., Japan",
    role: "Software Development Engineer Full Stack",
    duration: {
      start: "08/2021",
      end: "07/2023",
    },
    experience: [
      "Built front-end applications with React.js, leveraging Redux for state management and integrating vis.js for data visualization.",
      "Integrated third-party APIs, including Zoom, Google Drive, and Google Calendar, using OAuth authentication. Developed a Google Meet extension for seamless collaboration.",
      "Designed and deployed APIs with AWS API Gateway and Serverless Framework on AWS Lambda, ensuring scalable and efficient backend functionality.",
    ],
  },
  {
    title: "I’mbesideyou Inc., Japan",
    role: "Web Engineer Intern Frontend",
    duration: {
      start: "06/2021",
      end: "07/2021",
    },
    experience: [
      "Analyzed mental health data to uncover insights and trends, driving data-informed decision-making.",
      "Developed and maintained visualizations using Chart.js and React.js to track evolving trends. Published a Medium post documenting key learnings on leveraging Chart.js for data visualization.",
    ],
  },
];

function calculateDurationInMonths(start, end) {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  return years * 12 + months;
}

function Journey() {
  return (
    <section className="mx-10 my-20 w-full text-center max-w-screen-lg">
      <h2 className={"mb-20 text-3xl " + ps2p.className}>Journey</h2>

      <div className="flex items-center">
        {journey.reverse().map((job, index) => {
          const durationInMonths = calculateDurationInMonths(
            job.duration.start,
            job.duration.end
          );
          const lineWidth = durationInMonths * 10; // Adjust the multiplier as needed

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className={`${jetBrainsMono.className} text-white mb-2`}>
                  {job.title} ({job.duration.start} - {job.duration.end})
                </div>
                <div className={`${jetBrainsMono.className} text-white mb-2`}>
                  {job.role}
                </div>
                <div
                  className={`h-8 w-8 rounded-full ${
                    index === journey.length - 1
                      ? "bg-green-500 border-2 border-white"
                      : "bg-white"
                  }`}
                ></div>
              </div>
              {index < journey.length - 1 && (
                <hr className="w-10" style={{ width: `${lineWidth}px` }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Journey;
