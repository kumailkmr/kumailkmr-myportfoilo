"use client";

import { AboutHeader } from "./about/AboutHeader";
import { StorySection } from "./about/StorySection";
import { InteractiveTimeline } from "./about/InteractiveTimeline";
import { CoreValues } from "./about/CoreValues";
import { AboutCTA } from "./about/AboutCTA";

export function About() {
  return (
    <div className="bg-background min-h-screen">
      <AboutHeader />
      <StorySection />
      <InteractiveTimeline />
      <CoreValues />
      <AboutCTA />
    </div>
  );
}
