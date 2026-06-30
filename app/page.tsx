import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { ProblemsSolved } from "@/components/sections/ProblemsSolved";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <TechStack />
        <ProblemsSolved />
      </div>
    </SmoothScroll>
  );
}
