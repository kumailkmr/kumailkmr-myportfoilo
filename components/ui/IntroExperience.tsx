"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { IntroAnimation } from "@/components/ui/IntroAnimation";
import { WelcomeNotification } from "@/components/ui/WelcomeNotification";
import { HireMeModal } from "@/components/ui/HireMeModal";

export function IntroExperience({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showHireMe, setShowHireMe] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    setIntroComplete(true);
    setTimeout(() => {
      setShowNotification(true);
    }, 800);
  }, []);

  const handleHireMe = useCallback(() => {
    setShowHireMe(true);
  }, []);

  return (
    <>
      {/* Intro Animation overlay */}
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* Main site content — fades in after intro */}
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        {children}
      </div>

      {/* Welcome + Offer Notifications */}
      <WelcomeNotification show={showNotification} onHireMe={handleHireMe} />

      {/* Hire Me Modal triggered by notification CTA */}
      <HireMeModal isOpen={showHireMe} onClose={() => setShowHireMe(false)} />
    </>
  );
}
