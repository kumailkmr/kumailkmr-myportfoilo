"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isAudioMuted, setAudioMuted } from "@/lib/sounds";

export function SoundToggle({ className = "bg-background hover:bg-muted border-border shadow-sm h-9 w-9" }: { className?: string }) {
  const [muted, setMuted] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Read saved state on mount
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMuted(isAudioMuted());
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleToggle = () => {
    const nextState = !muted;
    setMuted(nextState);
    setAudioMuted(nextState);
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className={`relative rounded-full z-50 transition-all ${className}`}>
        <Volume2 className="h-[1.2rem] w-[1.2rem] text-foreground" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`relative rounded-full z-50 transition-transform hover:-translate-y-0.5 ${className}`}
      onClick={handleToggle}
      title={muted ? "Unmute Sounds" : "Mute Sounds"}
    >
      {muted ? (
        <VolumeX className="h-[1.2rem] w-[1.2rem] text-foreground" />
      ) : (
        <Volume2 className="h-[1.2rem] w-[1.2rem] text-foreground" />
      )}
      <span className="sr-only">Toggle portfolio sound design</span>
    </Button>
  );
}
