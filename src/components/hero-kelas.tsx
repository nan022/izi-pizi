// src/components/HeroKelas.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SquareCode, Crown } from "lucide-react";

export default function HeroKelas() {
  const title = "Algoritma Pemrograman";
  const description =
    "Algoritma pemrograman adalah langkah-langkah logis yang disusun untuk menyelesaikan suatu masalah secara sistematis. Kelas ini membahas dasar logika pemrograman, struktur kontrol, fungsi, dan pendekatan pemecahan masalah yang menjadi fondasi semua bahasa pemrograman.";
  
  const isPremium = true;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="rounded-2xl border border-border/50 bg-linear-to-br from-yellow-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <SquareCode className="h-6 w-6 text-yellow-400" />
              <Badge
                variant="outline"
                className={`${
                  isPremium && "border-yellow-400 text-primary"
                } font-medium`}
              >
                {isPremium && <>
                                <Crown className="h-6 w-6 mr-1 text-yellow-500" />
                                Pasukan Koding
                              </>
                }
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}