import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";
import { WorkCTA } from "@/components/sections/WorkCTA";

export default function WorkPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen pt-12">
        <Projects />
        <Technologies />
        <WorkCTA />
      </div>
    </SmoothScroll>
  );
}
