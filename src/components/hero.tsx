// components/hero.tsx
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const logos = "< Izi Pizi />";
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="flex flex-col items-center justify-center text-center gap-6 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {logos}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-md">
          Belajar Coding Jadi <span className="font-semibold text-foreground">Easy!</span>
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 py-6 px-6 text-lg font-semibold group"
          >
            <Link
              href="/auth"
              className="flex items-center gap-2"
            >
            Mulai Belajar
            <ArrowUpRight className="ml-1 h-5 w-5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}