import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, Star, Zap, GraduationCap, Flame, Medal } from "lucide-react";

export default function Lencana() {
  return (
    <Card className="border-0 bg-linear-to-br from-yellow-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold text-foreground">
          <Medal className="w-8 h-8 mx-auto mb-2 text-yellow-500 dark:text-yellow-400" />
          Lencana Belajarmu
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5 px-6">
        {/* Lencana 1 */}
        <div className="flex items-center gap-4 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-transform hover:scale-[1.02]">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
            <Star className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <p className="font-semibold text-foreground">B Aja 🗿</p>
            <p className="text-sm text-muted-foreground">Selesai Chapter 1</p>
          </div>
        </div>

        {/* Lencana 2 */}
        <div className="flex items-center gap-4 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-transform hover:scale-[1.02]">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg">
            <GraduationCap className="w-6 h-6  text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Bolehlah 🤡</p>
            <p className="text-sm text-muted-foreground">2 hari belajar berturut-turut</p>
          </div>
        </div>

        {/* Lencana 3 */}
        <div className="flex items-center gap-4 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-transform hover:scale-[1.02]">
          <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
            <Flame className="w-6 h-6 text-red-500 dark:text-red-500" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Keren! 😎</p>
            <p className="text-sm text-muted-foreground">7 hari belajar berturut-turut</p>
          </div>
        </div>

        {/* Lencana 4 */}
        <div className="flex items-center gap-4 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm opacity-50">
          <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <Zap className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <div>
            <p className="font-semibold text-muted-foreground">Kamu Suhu! 🥶</p>
            <p className="text-sm text-muted-foreground">Belum terbuka</p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Jangan Mimpi Ketinggian Kalau Belajar Masih Malas-malasan! Chuakss
        </p>
      </CardContent>
    </Card>
  );
}