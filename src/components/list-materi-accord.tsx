import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";
import Lencana from "./lencana"; // pastikan path sesuai struktur projectmu

const materiChapters = [
  {
    id: "chapter-1",
    title: "Chapter 1: Pseudocode & Flowchart",
    content: [
      "Pseudocode adalah cara menuliskan logika program dalam bentuk teks yang menyerupai bahasa manusia, tanpa terikat sintaks bahasa pemrograman tertentu.",
      "Flowchart adalah representasi visual dari alur logika program menggunakan simbol-simbol standar seperti oval (start/end), persegi panjang (proses), dan belah ketupat (keputusan).",
      "Keduanya digunakan sebagai langkah awal sebelum menulis kode sebenarnya, membantu programmer merancang solusi secara terstruktur dan menghindari kesalahan logika.",
      "Contoh pseudocode sederhana:\n  START\n  INPUT nilai\n  IF nilai >= 60 THEN\n    OUTPUT 'Lulus'\n  ELSE\n    OUTPUT 'Tidak Lulus'\n  ENDIF\n  END"
    ],
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Struktur Dasar Program",
    content: [
      "Setiap program memiliki struktur dasar: input → proses → output.",
      "Bahasa pemrograman umumnya terdiri dari deklarasi variabel, fungsi, dan blok kontrol (if, loop, dll).",
      "Komentar penting untuk dokumentasi dan tidak dieksekusi oleh komputer.",
      "Aturan penulisan (sintaks) harus diikuti secara ketat agar program bisa dijalankan."
    ],
  },
];

export default function ListMateri() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Daftar Materinya Nih!</h2>
      
      {/* Layout dua kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Kolom kiri: Daftar materi */}
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3 "
            defaultValue="chapter-1"
          >
            {materiChapters.map((chapter) => (
              <AccordionItem
                key={chapter.id}
                value={chapter.id}
                className="rounded-xl border border-border bg-linear-to-br from-yellow-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 text-left hover:no-underline group">
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-semibold text-xl text-foreground group-data-[state=open]:text-primary">
                      {chapter.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-1 ">
                  <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed">
                    {chapter.content.map((paragraph, idx) => (
                      <p key={idx} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Kolom kanan: Lencana */}
        <div className="lg:sticky lg:top-8">
          <Lencana />
        </div>
      </div>
    </div>
  );
}