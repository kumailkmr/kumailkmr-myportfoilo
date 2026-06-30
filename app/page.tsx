import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { Technologies } from "@/components/sections/Technologies";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { ProblemsSolved } from "@/components/sections/ProblemsSolved";
import { Projects } from "@/components/sections/Projects";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { WhyMe } from "@/components/sections/WhyMe";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Technologies />
        <About />
        <Services />
        <Industries />
        <ProblemsSolved />
        <Projects />
        <CaseStudies />
        <Process />
        <TechStack />
        <WhyMe />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
