import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/model/Navbar";

const playfair = Playfair({
  variable: "--font-playfair-regular",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Gunn - Model Portfolio",
  description: "",
};

export default function ModelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${playfair.className} antialiased m-20`}>
      <header className="flex flex-col gap-2 items-center justify-center mb-10">
        <h1 className="text-2xl lg:text-7xl">William Gunn</h1>
        <Navbar />
      </header>
      {children}
    </main>
  );
}
