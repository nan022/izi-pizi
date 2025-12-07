// src/components/floating-dm.tsx
"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ADMIN_PHONE = "6282287034230";

export default function FloatingDM() {
  const whatsappUrl = `https://wa.me/${ADMIN_PHONE}?text=Halo%20Izi%20Pizi!%20Saya%20mau%20tanya%20tentang%20platform%20belajar.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat di WhatsApp"
      >
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-7 h-7 text-primary-foreground" />
        </Link>
      </Button>
    </div>
  );
}