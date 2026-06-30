import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { AIEcosystem } from "@/components/sections/AIEcosystem";

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen pt-12">
        <Services />
        <Industries />
        <Process />
        <AIEcosystem />
      </div>
    </SmoothScroll>
  );
}
