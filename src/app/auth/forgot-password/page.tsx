// app/page.tsx
"use client";

import ForgotPasswordForm from "@/components/forgot-password-form";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ForgotPassword() {
  const { resolvedTheme } = useTheme();
  const [particleColor, setParticleColor] = useState("#ffffff");

  useEffect(() => {
    const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
    setParticleColor(currentTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative min-h-screen bg-background">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color={particleColor}
        size={0.8}
      />
      <div className="relative z-10">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}