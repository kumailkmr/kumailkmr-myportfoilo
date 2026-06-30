"use client";

import { AboutHeader } from "./about/AboutHeader";
import { StorySection } from "./about/StorySection";
import { InteractiveTimeline } from "./about/InteractiveTimeline";
import { TechOrbit } from "./about/TechOrbit";
import { CoreValues } from "./about/CoreValues";
import { AboutCTA } from "./about/AboutCTA";

export function About() {
  return (
    <div className="bg-background min-h-screen">
      <AboutHeader />
      <StorySection />
      <InteractiveTimeline />
      <TechOrbit />
      <CoreValues />
      <AboutCTA />
    </div>
  );
}
