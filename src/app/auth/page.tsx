// app/page.tsx
"use client";

import LoginForm from "@/components/login-form";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [particleColor, setParticleColor] = useState("#ffffff");

  useEffect(() => {
    const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
    setParticleColor(currentTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative min-h-screen bg-background">
      <LoginForm />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color={particleColor}
        size={0.8}
      />
    </div>
  );
}