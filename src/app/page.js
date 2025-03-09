import dynamic from "next/dynamic";

const Valorent = dynamic(() => import("./Valorent"));
const HeroSection = dynamic(() => import("./HeroSection"));
const Skills = dynamic(() => import("./Skills"));
const Achievements = dynamic(() => import("./Achievements"));
const Journey = dynamic(() => import("./Journey"));
const ResumeGame = dynamic(() => import("./ResumeGame"));
const ConnectWithMe = dynamic(() => import("./ConnectWithMe"));

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <HeroSection />
      <Achievements />
      <Skills />
      <Journey />
      <ResumeGame />
      <ConnectWithMe />
      <Valorent />
    </div>
  );
}
