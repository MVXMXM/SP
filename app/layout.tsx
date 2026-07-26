import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "./data";
import SebNav from "./SebNav";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Photography by Sebastian Piras",
  description:
    "Sebastian Piras is a New York based photographer and filmmaker. Portraits of artists, editorial photography, and film stills.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} min-h-screen bg-white text-neutral-900`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <SebNav />
        <main className="mx-auto max-w-6xl px-6 pb-20 pt-28">{children}</main>
        <footer className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-6xl items-center px-6 py-8 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            <span>{site.copyright}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
