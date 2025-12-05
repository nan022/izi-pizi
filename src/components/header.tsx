// components/header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, ContainerIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Kelas", href: "/kelas" },
    { name: "Analisis CV", href: "/analisis-cv" },
    { name: "Gabung Pelajar Kaya", href: "/subscribe", id: "subscribe"},
  ];

  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ContainerIcon className="w-10 h-10" />
            <span className="font-bold text-xl md:text-2xl text-foreground">
              Izi Pizi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <div className="flex gap-5 items-center bg-background/60 backdrop-blur-sm rounded-full border border-border p-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const isSubscribeMenu = item.id == "subscribe";
                return (
                    <Link
                    key={item.name}
                    href={item.href}
                    className={`flex gap-3 px-4 py-2 text-sm font-medium transition-colors 
                        ${
                            isActive
                            ? "text-primary-foreground bg-primary/70 dark:bg-primary shadow-md rounded-full hover:text-primary-foreground"
                            : "text-muted-foreground"
                        }
                        ${
                            isSubscribeMenu
                            ? "hover:scale-105 px-4 py-2 bg-primary/70 font-semibold rounded-full text-sm text-white dark:text-gray-900 transition-colors flex items-center gap-2"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                    onClick={() => setMobileMenuOpen(false)}
                    >
                    {isSubscribeMenu && <Crown className="w-4 h-4 text-yellow-400" />}
                    {item.name}
                    </Link>
                );
                })}
            </div>
          </nav>

          {/* Desktop: CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 px-4 py-2">
                <Crown className="h-4 w-4 text-yellow-400" />
                <div className="flex -space-x-1">
                    <Avatar className="h-5 w-5 ring-2 ring-background grayscale">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-5 w-5 ring-2 ring-background grayscale">
                        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-5 w-5 ring-2 ring-background grayscale">
                        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                </div>
                <span className="text-xs font-medium text-primary">100+</span>
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 md:hidden py-3 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const isSubscribeMenu = item.id == "subscribe";
                return (
                    <Link
                    key={item.name}
                    href={item.href}
                    className={`flex gap-3 px-4 py-2 text-sm font-medium transition-colors 
                        ${
                            isActive
                            ? "text-primary-foreground bg-primary/70 dark:bg-primary shadow-md rounded-full hover:text-primary-foreground"
                            : "text-muted-foreground"
                        }
                        ${
                            isSubscribeMenu
                            ? "hover:scale-105 w-fit px-4 py-2 bg-primary/70 font-semibold rounded-full text-sm text-white dark:text-gray-900 transition-colors flex items-center gap-2"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                    onClick={() => setMobileMenuOpen(false)}
                    >
                    {isSubscribeMenu && <Crown className="w-4 h-4 text-yellow-400" />}
                    {item.name}
                    </Link>
                );
                })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}