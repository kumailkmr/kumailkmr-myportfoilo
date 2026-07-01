"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ColorConfig {
  name: string;
  primary: string;
  hover: string;
  foreground: string;
  ring: string;
}

const COLORS: Record<string, { light: ColorConfig; dark: ColorConfig }> = {
  blue: {
    light: {
      name: "Blue",
      primary: "#2563EB",
      hover: "#1D4ED8",
      foreground: "#FFFFFF",
      ring: "#2563EB",
    },
    dark: {
      name: "Blue",
      primary: "#3B82F6",
      hover: "#2563EB",
      foreground: "#FFFFFF",
      ring: "#3B82F6",
    }
  },
  yellow: {
    light: {
      name: "Yellow",
      primary: "#EAB308",
      hover: "#CA8A04",
      foreground: "#000000",
      ring: "#EAB308",
    },
    dark: {
      name: "Yellow",
      primary: "#FACC15",
      hover: "#EAB308",
      foreground: "#000000",
      ring: "#FACC15",
    }
  },
  green: {
    light: {
      name: "Green",
      primary: "#16A34A",
      hover: "#15803D",
      foreground: "#FFFFFF",
      ring: "#16A34A",
    },
    dark: {
      name: "Green",
      primary: "#22C55E",
      hover: "#16A34A",
      foreground: "#FFFFFF",
      ring: "#22C55E",
    }
  },
  maroon: {
    light: {
      name: "Maroon",
      primary: "#991B1B",
      hover: "#7F1D1D",
      foreground: "#FFFFFF",
      ring: "#991B1B",
    },
    dark: {
      name: "Maroon",
      primary: "#B91C1C",
      hover: "#991B1B",
      foreground: "#FFFFFF",
      ring: "#B91C1C",
    }
  },
  white: {
    light: {
      name: "White",
      primary: "#18181B", // Zinc-900 for dark text contrast in light mode
      hover: "#27272A",
      foreground: "#FFFFFF",
      ring: "#18181B",
    },
    dark: {
      name: "White",
      primary: "#FFFFFF", // White for dark mode
      hover: "#F4F4F5",
      foreground: "#000000",
      ring: "#FFFFFF",
    }
  }
};

export function ColorThemeToggle({ className = "bg-background hover:bg-muted border-border shadow-sm h-9 w-9" }: { className?: string }) {
  const { theme } = useTheme();
  const [activeColor, setActiveColor] = useState<string>("yellow");
  const [mounted, setMounted] = useState(false);

  // Read saved color on client mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-button-color");
    const frame = requestAnimationFrame(() => {
      if (saved && COLORS[saved]) {
        setActiveColor(saved);
      }
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Update dynamic CSS variables on active color or theme changes
  useEffect(() => {
    if (!mounted) return;
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const colorSet = COLORS[activeColor][isDark ? "dark" : "light"];

    const root = document.documentElement;
    root.style.setProperty("--primary", colorSet.primary);
    root.style.setProperty("--primary-hover", colorSet.hover);
    root.style.setProperty("--primary-foreground", colorSet.foreground);
    root.style.setProperty("--ring", colorSet.ring);
    root.style.setProperty("--sidebar-primary", colorSet.primary);
    root.style.setProperty("--sidebar-primary-foreground", colorSet.foreground);
  }, [activeColor, theme, mounted]);

  const cycleColor = () => {
    const keys = Object.keys(COLORS);
    const nextIndex = (keys.indexOf(activeColor) + 1) % keys.length;
    const nextColor = keys[nextIndex];
    setActiveColor(nextColor);
    localStorage.setItem("portfolio-button-color", nextColor);
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className={`relative rounded-full z-50 transition-all ${className}`}>
        <Palette className="h-[1.2rem] w-[1.2rem] text-foreground" />
      </Button>
    );
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const dotColor = COLORS[activeColor][isDark ? "dark" : "light"].primary;

  return (
    <Button
      variant="outline"
      size="icon"
      className={`relative rounded-full z-50 transition-transform hover:-translate-y-0.5 ${className}`}
      onClick={cycleColor}
      title={`Active Color: ${COLORS[activeColor][isDark ? "dark" : "light"].name} (Click to Change)`}
    >
      <Palette className="h-[1.2rem] w-[1.2rem] text-foreground" />
      <span 
        className="absolute bottom-1 right-1 w-2 h-2 rounded-full border border-background shadow-xs transition-colors duration-300"
        style={{ backgroundColor: dotColor }}
      />
      <span className="sr-only">Cycle button colors</span>
    </Button>
  );
}
