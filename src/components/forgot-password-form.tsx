// src/components/forgot-password-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContainerIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Permintaan reset password untuk:", email);
    alert("Tautan reset password telah dikirim ke email Anda (simulasi).");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-linear-to-br from-gray-200 to-yellow-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
        <CardHeader className="flex flex-col items-center text-center">
          <Link href="/">
            <div className="flex items-center gap-2 mb-2">
              <ContainerIcon className="w-10 h-10" />
              <span className="hidden md:block font-bold text-xl md:text-2xl text-foreground">
                Izi Pizi
              </span>
            </div>
          </Link>
          <CardTitle>Lupa Password?</CardTitle>
          <CardDescription>
            Masukkan email akunmu, kami akan kirim tautan untuk mengatur ulang password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="contoh@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Minta Link Reset
            </Button>
          </form>
        </CardContent>
        <div className="px-6 pb-6 text-center">
          <Link href="/auth" className="text-sm text-primary hover:underline">
            ← Kembali ke login
          </Link>
        </div>
      </Card>
    </div>
  );
}