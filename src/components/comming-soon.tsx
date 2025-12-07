// components/hero.tsx
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Crown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CommingSoon() {
  const commingSoon = "< Comming Soon />";
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="flex flex-col items-center justify-center text-center gap-6 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {commingSoon}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-md">
          Fitur nya masih di buat, tuggu yaa!
        </p>
      </div>
    </div>
  );
}