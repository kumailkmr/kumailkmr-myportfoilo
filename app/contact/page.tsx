import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen pt-12">
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </SmoothScroll>
  );
}
