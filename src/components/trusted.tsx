// src/components/trusted.tsx
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Ganti dengan logo asli kamu nanti (SVG/PNG transparan, ukuran seragam)
const universities = [
  { name: "Universitas A", logo: "/logos/univ-1.svg" },
  { name: "Universitas B", logo: "/logos/univ-2.svg" },
  { name: "Universitas C", logo: "/logos/univ-3.svg" },
  { name: "Universitas A", logo: "/logos/univ-1.svg" },
  { name: "Universitas B", logo: "/logos/univ-2.svg" },
  { name: "Universitas C", logo: "/logos/univ-3.svg" },
  { name: "Universitas A", logo: "/logos/univ-1.svg" },
  { name: "Universitas B", logo: "/logos/univ-2.svg" },
  { name: "Universitas C", logo: "/logos/univ-3.svg" },
];

export default function Trusted() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );

  return (
    <section className="py-12 sm:py-16 bg-background/50">
      <div className="container px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Dipercaya oleh
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground">
            Banyak Pelajar di Indonesia
          </h3>
        </div>

        <div className="flex justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.reset()}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {universities.map((uni, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="p-2">
                    <Card className="bg-transparent border-0 shadow-none hover:bg-accent/20 transition-colors">
                      <CardContent className="flex items-center justify-center p-4 h-24">
                        <Image
                          src={uni.logo}
                          alt={uni.name}
                          width={120}
                          height={60}
                          className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}