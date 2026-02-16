"use client";

import React from "react";
import { JetBrains_Mono, Press_Start_2P } from "next/font/google";
import {
  TbBrain,
  TbCode,
  TbTool,
  TbDatabase,
  TbCloud,
} from "react-icons/tb";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const ps2p = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

const categoryIcons = {
  "AI & Gen AI": TbBrain,
  "Programming Languages": TbCode,
  "Tools & Frameworks": TbTool,
  Databases: TbDatabase,
  "Platforms & Services": TbCloud,
};

const skillsData = {
  "AI & Gen AI": [
    "Generative AI",
    "Prompt Engineering",
    "RAG",
    "Vector Databases (Pinecone, Qdrant)",
    "LLM Integration (OpenAI, Gemini, Ollama)",
    "Workflow Automation (n8n, Zapier)",
    "TTS/STT (Whisper, Piper, ElevenLabs)",
    "mem0",
    "Ollama",
    "OpenClaw (skill development, tool integration & communication channels)",
    "Claude Code",
  ],
  "Programming Languages": ["C++", "JavaScript", "Python", "Java", "Go"],
  "Tools & Frameworks": [
    "React.js",
    "Next.js",
    "React Native",
    "Expo",    
    "Redux",
    "Node.js",
    "Docker",
    "Serverless",
  ],
  Databases: ["MySQL", "SQL", "DynamoDB", "MongoDB"],
  "Platforms & Services": [
    "Google Analytics",
    "AWS",
    "Google Play Store",
    "App Store (iOS)",
  ],
};

function SkillPill({ children, highlight = false }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium sm:text-sm sm:px-3 sm:py-1.5 " +
        (highlight
          ? "bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-400/50 text-violet-800 dark:text-violet-100"
          : "border border-[var(--foreground)]/30 bg-[var(--foreground)]/5")
      }
    >
      {children}
    </span>
  );
}

function Skills() {
  return (
    <section className="my-16 w-full px-4 sm:px-6 md:px-10 max-w-screen-lg">
      <h2 className={"mb-10 text-2xl sm:text-3xl " + ps2p.className}>
        Skills
      </h2>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 " +
          jetBrainsMono.className
        }
      >
        {Object.entries(skillsData).map(([category, skills], index) => {
          const IconComponent = categoryIcons[category];
          const isAiCard = category === "AI & Gen AI";
          return (
            <div
              key={index}
              className={
                "rounded-lg border p-4 min-h-0 " +
                (isAiCard
                  ? "sm:col-span-2 lg:col-span-4"
                  : "")
              }
              style={
                isAiCard
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(6,182,212,0.05) 50%, rgba(139,92,246,0.06) 100%)",
                      borderColor: "rgba(139,92,246,0.4)",
                    }
                  : undefined
              }
            >
              <h3 className="flex items-start gap-2 mb-3 text-sm sm:text-base">
                {IconComponent && (
                  <IconComponent className="size-4 sm:size-5 shrink-0" />
                )}
                <span>{category}</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((skill, i) => (
                  <SkillPill key={i} highlight={isAiCard}>
                    {skill}
                  </SkillPill>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
