import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwatosin Adesoro | Product Designer & Design Engineer",
  description: "Portfolio of Oluwatosin Adesoro - Product Designer & Design Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}
      suppressHydrationWarning
    >
      <body 
        className="relative font-sans antialiased bg-white text-zinc-900 dark:bg-[#080808] dark:text-zinc-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}