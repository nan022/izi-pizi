// src/components/pricing.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Users, FileText, Code, FolderOpen, Annoyed, Flame } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState, useEffect } from "react";

function getNextPromoEndTime() {
  const now = Date.now();
  const twoHours = 10 * 60 * 1000;
  const cycles = Math.ceil(now / twoHours);
  return cycles * twoHours;
}

export default function Pricing() {
  const featuresFree = [
    "Akses materi gratis",
    "Gabung server Discord komunitas",
    "Materi diperbarui secara berkala",
    "Diskusi di forum",
  ];

  const featuresPremium = [
    "Akses semua materi premium",
    "Gabung Discord eksklusif",
    "Klaim sertifikat penyelesaian kelas",
    "10+ template website untuk portofolio",
    "50+ link repository GitHub (untuk referensi portfolio)",
    "Prioritas bantuan & feedback",
    "Dapat info terbaru duluan",
  ];

  const [endTime, setEndTime] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
    // Set waktu akhir promo berikutnya (sekali saja saat mount)
    const nextEnd = getNextPromoEndTime();
    setEndTime(nextEnd);

    // Update countdown tiap detik
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = nextEnd - now;

      if (diff <= 0) {
        const newEnd = getNextPromoEndTime();
        setEndTime(newEnd);
        const newDiff = newEnd - Date.now();
        updateTimer(newDiff);
      } else {
        updateTimer(diff);
      }
    }, 1000);

    // Fungsi update format jam-menit-detik
    const updateTimer = (diff: number) => {
      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      setTimeLeft({ hours, minutes, seconds });
    };
        updateTimer(nextEnd - Date.now());
        return () => clearInterval(interval);
    }, [endTime]);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="container py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
          Gabung Jadi Pasukan Koding?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Gabung ke <span className="font-semibold text-primary">Pasukan Koding</span> untuk akses lengkap!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Paket Gratis */}
        <Card className="flex flex-col bg-linear-to-br from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900 border-muted/30">
          <CardHeader className="text-center md:pt-8">
            <div className="flex justify-center mb-2">
              <Annoyed className="h-6 w-6 text-gray-400" />
            </div>
            <CardTitle className="text-2xl">
                Gratisan
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              Gabung Pasukan Aja heheh
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <div className="flex justify-center mb-6">
              <span className="text-4xl font-bold">Rp 0</span>
              <span className="text-muted-foreground self-end ml-1">/bulan</span>
            </div>
            <ul className="space-y-3">
              {featuresFree.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-6">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/auth">Gabung Sekarang</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Paket Premium - Pasukan Koding */}
        <Card className="flex flex-col border-yellow-400 bg-linear-to-br from-gray-200 to-yellow-50 dark:from-gray-800 dark:to-gray-900 shadow-lg shadow-amber-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-linear-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg z-10">
            <div className="flex items-center">
                <Flame className="h-4 w-4 inline mr-1" />
                TRENDING!
            </div>
            </div>
            <CardHeader className="text-center pb-4 pt-8">
            <div className="flex justify-center mb-2">
                <Crown className="h-6 w-6 text-yellow-400" />
            </div>
            <CardTitle className="text-2xl">Pasukan Koding</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
                Ningkatin skill mu bareng komunitas!
            </CardDescription>
            </CardHeader>
            <CardContent className="grow">
            {/* Harga dengan coret */}
            <div className="flex flex-col items-center mb-4">
                <div className="flex items-baseline gap-2">
                <span className="text-2xl text-muted-foreground/70 line-through">
                    Rp 70.000
                </span>
                <span className="text-4xl font-bold text-primary">Rp 17.000</span>
                </div>
                <span className="text-sm text-muted-foreground mt-1">
                /bulan • hemat 75%
                </span>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 bg-amber-100/70 dark:bg-amber-900/30 px-3 py-2 rounded-lg">
                <span className="text-xs font-semibold text-amber-800 dark:text-amber-200">
                    Waktu promo tersisa:
                </span>
                <div className="flex gap-1">
                    <div className="flex flex-col items-center">
                    <span className="text-sm font-mono font-bold text-amber-900 dark:text-amber-100">
                        {formatTime(timeLeft.hours)}
                    </span>
                    <span className="text-[10px] text-amber-700 dark:text-amber-300">JAM</span>
                    </div>
                    <span className="text-amber-700 dark:text-amber-300">:</span>
                    <div className="flex flex-col items-center">
                    <span className="text-sm font-mono font-bold text-amber-900 dark:text-amber-100">
                        {formatTime(timeLeft.minutes)}
                    </span>
                    <span className="text-[10px] text-amber-700 dark:text-amber-300">MENIT</span>
                    </div>
                    <span className="text-amber-700 dark:text-amber-300">:</span>
                    <div className="flex flex-col items-center">
                    <span className="text-sm font-mono font-bold text-amber-900 dark:text-amber-100">
                        {formatTime(timeLeft.seconds)}
                    </span>
                    <span className="text-[10px] text-amber-700 dark:text-amber-300">DETIK</span>
                    </div>
                </div>
                </div>
            </div>

            <ul className="space-y-3">
                {featuresPremium.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{feature}</span>
                </li>
                ))}
            </ul>
            </CardContent>
            <CardFooter className="mt-4">
            <Button className="w-full bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-primary-foreground font-bold shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all" asChild>
                <Link href="/auth/register">Jadi Pasukan Koding</Link>
            </Button>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}