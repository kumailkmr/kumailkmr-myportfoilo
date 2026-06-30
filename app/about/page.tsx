import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { About } from "@/components/sections/About";
import { WhyMe } from "@/components/sections/WhyMe";
import { Testimonials } from "@/components/sections/Testimonials";

export default function AboutPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen pt-12">
        <About />
        <WhyMe />
        <Testimonials />
      </div>
    </SmoothScroll>
  );
}
