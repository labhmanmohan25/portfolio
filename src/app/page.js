import Valorent from "./Valorent";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Journey from "./Journey";
import ResumeGame from "./ResumeGame";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <HeroSection />
      <Achievements />
      <Skills />
      <Journey />
      <ResumeGame />
      <Valorent />
    </div>
  );
}
