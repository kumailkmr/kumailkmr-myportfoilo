import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Projects } from "@/components/sections/Projects";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Technologies } from "@/components/sections/Technologies";

export default function WorkPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen pt-12">
        <Projects />
        <CaseStudies />
        <Technologies />
      </div>
    </SmoothScroll>
  );
}
