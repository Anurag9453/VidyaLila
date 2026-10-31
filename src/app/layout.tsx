import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { AppProvider } from "@/lib/store";
import { Navbar } from "@/components/Navbar";
import { CelebrationModal } from "@/components/CelebrationModal";
import { BrandLoader } from "@/components/BrandLoader";
import { BrandCrestIcon } from "@/components/BrandLogo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "VidyaLila | CBSE & ICSE Free Study Units & Live Quiz Arena",
  description:
    "India's interactive school learning platform offering free chapter-wise study units, GP (Gyan Points) rewards, scholar ranks, and live daily & monthly board quizzes for Class 9-12.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col text-slate-800 antialiased selection:bg-amber-200 selection:text-slate-900">
        <AppProvider>
          <BrandLoader />
          <Navbar />
          <CelebrationModal />
          <main className="flex-1 w-full max-w-[1920px] mx-auto px-3.5 pb-12 pt-5 sm:px-6 md:px-10 md:pb-16 md:pt-8 lg:px-16">
            {children}
          </main>

          {/* Global Legal & Educational Disclaimer Footer */}
          <footer className="w-full border-t border-slate-200/90 bg-white/90 pb-24 md:pb-8 pt-6 text-xs text-slate-500">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-extrabold text-slate-800">
                  <BrandCrestIcon className="h-6 w-6 rounded-lg" />
                  <span>VidyaLila • Supplementary Self-Study &amp; Skill Practice Platform</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 font-bold text-slate-600">
                  <Link href="/terms" className="hover:text-emerald-600 underline underline-offset-4">
                    Terms of Use &amp; Educational Disclaimer
                  </Link>
                  <Link href="/terms" className="hover:text-emerald-600">
                    Quiz Fair-Play &amp; Bonus Marks Policy
                  </Link>
                  <Link href="/studio" className="hover:text-emerald-600">
                    Academic Review Studio
                  </Link>
                </div>
              </div>

              <p className="text-[11px] leading-relaxed text-slate-400">
                <strong>Educational &amp; Non-Affiliation Disclaimer:</strong> VidyaLila is an independent supplementary self-study aid and is not affiliated with, endorsed by, or connected to CBSE, CISCE (ICSE/ISC), or NCERT. While all lessons and quiz questions are cross-checked against standard textbooks, content is provided on an &ldquo;as-is&rdquo; basis. Students should always refer to their official NCERT / Board prescribed textbooks as the primary authoritative source for school and board examinations.
              </p>
            </div>
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
