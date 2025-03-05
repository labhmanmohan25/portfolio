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

const skillsData = {
  "Programming Languages": ["C++", "JavaScript", "Python", "Java"],
  "Tools & Frameworks": [
    "React.js",
    "Redux",
    "Node.js",
    "Docker",
    "Serverless",
  ],
  Databases: ["MySQL", "DynamoDB", "MongoDB"],
  "Cloud Platforms": [
    "AWS (Lambda, RDS, VPC, S3, API Gateway, CDK, ECR, CodeBuild)",
  ],
};

function Skills() {
  return (
    <section className="mx-10 my-20 max-w-screen-lg">
      <h2 className={"mb-20 text-3xl " + ps2p.className}>Skills</h2>
      <div className="flex flex-wrap -mx-2">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div
            key={index}
            className={
              "h-[350px] w-[230px] border rounded-lg p-4 relative overflow-hidden mb-10 mx-2 " +
              jetBrainsMono.className
            }
            style={{ borderColor: "var(--foreground)" }}
          >
            <h3>{category}</h3>
            <div
              className="absolute bottom-0 right-0 p-3 rounded-tl-lg rounded-br-lg cursor-pointer transition-all group duration-1000 ease-in-out hover:w-full hover:h-full hover:rounded-lg"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              <strong>Know More</strong>
              <div className="hidden items-center justify-center duration-1000 group-hover:block">
                {skills.map((skill, skillIndex) => (
                  <p key={skillIndex}>{skill}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
