"use client";

import React, { useState } from "react";
import { JetBrains_Mono, Press_Start_2P } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const ps2p = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

const MOBILE_PREVIEW_COUNT = 2; // Show first 2 bullets on mobile before "Show more"

const journey = [
  {
    title: "AI Systems & Applied Intelligence",
    role: "Independent Research & Builder",
    duration: { start: "Feb 2026", end: "Present" },
    experience: [
      "Deep-diving into cutting-edge AI systems (LLMs, agent frameworks, multimodal models, infra).",
      "Building small-scale AI tools and automation systems to understand real-world deployment tradeoffs.",
      "Experimenting with local models, orchestration layers, and API-based LLM integrations.",
      "Studying inference optimization, model hosting, evaluation, and human-in-the-loop workflows.",
      "Documenting learnings and prototyping production-oriented AI utilities."
    ],
  },
  {
    title: "Postman",
    role: "Software Engineer – Fullstack (Growth & Monetization)",
    duration: { start: "Apr 2025", end: "Feb 2026" },
    experience: [
      "Owned Trials & Monetization flows impacting free-to-paid conversion and revenue growth.",
      "Led 10 A/B experiments across onboarding and checkout; partnered with Product & Design to optimize funnel performance.",
      "Unified pricing and checkout systems across 5 product surfaces; reduced fragmentation and improved conversion consistency.",
      "Migrated org-wide authentication to Okta SSO; strengthened enterprise security and compliance readiness.",
      "Eliminated 25+ redundant code paths and API calls; improved average load time by ~1.5s."
    ],
  },
  {
    title: "Innovaccer Inc., India",
    role: "Software Development Engineer 2",
    duration: { start: "Jun 2024", end: "Apr 2025" },
    experience: [
      "Led the License Manager platform; streamlined operations for 50+ organizations.",
      "Designed Patient Reference feature for 1,600+ healthcare orgs; cut data-sharing time by 70%.",
      "Reduced bug rate by 15% through testing and debugging.",
      "Built and maintained microservices with React and BFF architecture.",
      "Replaced Redux with custom hooks/Context; reduced code size by 25%.",
    ],
  },
  {
    title: "I'mbesideyou Inc., Japan",
    role: "Software Development Engineer 2 Full Stack",
    duration: { start: "Aug 2023", end: "Jun 2024" },
    experience: [
      "Architected front-end solutions and integrated with back-end systems.",
      "Built AWS CDK infrastructure (DBs, VPCs, S3); improved deployment by 30%.",
      "Reduced graph loading from 1.5 min to under 1 sec; increased engagement by 20%.",
      "Drove PMF research for product and development decisions.",
    ],
  },
  {
    title: "I'mbesideyou Inc., Japan",
    role: "Software Development Engineer Full Stack",
    duration: { start: "Aug 2021", end: "Jul 2023" },
    experience: [
      "Built React.js apps with Redux and vis.js for data visualization.",
      "Integrated Zoom, Google Drive, Calendar via OAuth; built Google Meet extension.",
      "Designed APIs with AWS API Gateway and Serverless on Lambda.",
    ],
  },
  {
    title: "I'mbesideyou Inc., Japan",
    role: "Web Engineer Intern",
    duration: { start: "May 2021", end: "Jul 2021" },
    experience: [
      "Analyzed mental health data for insights and trends.",
      "Built Chart.js + React visualizations; wrote a Medium post on Chart.js.",
    ],
  },
  {
    title: "IIT (ISM), Dhanbad",
    role: "B.Tech, Mechanical Engineering",
    duration: { start: "2018", end: "2022" },
    experience: ["Bachelor of Technology in Mechanical Engineering."],
  },
];

function JourneyCard({ job, isMobile }) {
  const [expanded, setExpanded] = useState(false);
  const bullets = job.experience;
  const hasMore = isMobile && bullets.length > MOBILE_PREVIEW_COUNT;
  const visibleBullets = hasMore && !expanded
    ? bullets.slice(0, MOBILE_PREVIEW_COUNT)
    : bullets;
  const hiddenCount = bullets.length - MOBILE_PREVIEW_COUNT;

  return (
    <div className="flex gap-4 text-left">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)]"
          aria-hidden
        />
        <div className="w-px flex-1 min-h-[1rem] bg-[var(--foreground)] opacity-30" />
      </div>

      <div className="pb-8 flex-1 min-w-0">
        <p className={`font-semibold text-[var(--foreground)] ${jetBrainsMono.className}`}>
          {job.title}
        </p>
        <p className={`text-sm text-[var(--foreground)] opacity-90 ${jetBrainsMono.className}`}>
          {job.role}
        </p>
        <p className={`text-xs text-[var(--foreground)] opacity-70 ${jetBrainsMono.className} mt-0.5`}>
          {job.duration.start} → {job.duration.end}
        </p>

        {bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5 list-disc list-inside text-sm text-[var(--foreground)] opacity-90">
            {visibleBullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}

        {hasMore && !expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className={`mt-2 text-sm font-medium underline underline-offset-2 ${jetBrainsMono.className} text-[var(--foreground)] opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 rounded px-1 py-0.5 -ml-1 min-h-[44px] min-w-[44px] inline-flex items-center`}
            aria-expanded="false"
          >
            Show {hiddenCount} more
          </button>
        )}
        {hasMore && expanded && (
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className={`mt-2 text-sm font-medium underline underline-offset-2 ${jetBrainsMono.className} text-[var(--foreground)] opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 rounded px-1 py-0.5 -ml-1 min-h-[44px] min-w-[44px] inline-flex items-center`}
            aria-expanded="true"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
}

export default function Journey() {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const set = () => setIsMobile(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  return (
    <section className="my-16 sm:my-20 w-full px-4 sm:px-6 md:px-10 max-w-screen-lg" aria-labelledby="journey-heading">
      <h2 id="journey-heading" className={"mb-10 text-2xl sm:text-3xl " + ps2p.className}>
        Journey
      </h2>

      <div className="relative max-w-4xl">
        {journey.map((job, index) => (
          <JourneyCard key={index} job={job} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}
