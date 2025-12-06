"use client";

import Link from "next/link";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Annoyed, Crown, SquareCode } from "lucide-react";
import { Badge } from "./ui/badge";

// Data ini nanti bisa diambil dari API/database
const kelasData = [
  {
    nama: "Algoritma Pemrograman",
    path: "/kelas/algoritma-pemrograman",
    tipe: "gratis",
  },
  {
    nama: "Fundamental HTML & CSS",
    path: "/kelas/html-css",
    tipe: "gratis",
  },
  {
    nama: "Restful API Golang",
    path: "/kelas/restful-api-golang",
    tipe: "premium",
  },
  {
    nama: "Fullstack Web Development Laravel",
    path: "/kelas/laravel-fullstack",
    tipe: "premium",
  },
];

export default function DropDownKelas({ isActive = false }: { isActive?: boolean }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`
              ${
                isActive 
                ? "text-primary"
                : "text-muted-foreground"
              }`}>
            Belajar
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-fit p-4">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium">
                Pemrograman Website
                <SquareCode className="w-4 h-4" />
              </div>
              <div className="h-px bg-border" />
              {kelasData.map((kelas, index) => (
                <Link key={index} href={kelas.path} className="block">
                  <NavigationMenuLink asChild>
                    <div className="flex w-90 md:w-110 cursor-pointer select-none flex-row justify-between rounded-md px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {kelas.nama}
                      {kelas.tipe === "gratis" ? (
                        <Badge variant="outline" className="ml-2 flex items-center gap-1">
                          <Annoyed className="w-3 h-3" />
                          <span>
                            Gratisan
                          </span>
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="ml-2 flex items-center gap-1 border-yellow-400 text-yellow-400"
                        >
                          <Crown className="w-3 h-3 text-yellow-400" />
                        </Badge>
                      )}
                    </div>
                  </NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}