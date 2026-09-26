"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { SiX, SiYoutube, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { useTheme } from "next-themes";

const projectsData = [
  { id: 1, title: "GoalHyke", category: "AI PRODUCT", image: "/projects/Goalhyke.jpg", url: "https://goalhyke.com" },
  { id: 2, title: "Letsellify", category: "E-COMMERCE", image: "/projects/letsellify.jpg", url: "https://letsellify.com" },
  { id: 3, title: "ContriHub", category: "FINTECH", image: "/projects/contrihub-3d-graphic.png", url: "https://contrihub.com" },
  { id: 4, title: "Habtech", category: "CONSTRUCTION", image: "/projects/Habtech.jpg", url: "https://habtech.com" },
  { id: 5, title: "Bida Forum", category: "WEB NGO", image: "/projects/Bida Forum.jpg", url: "https://bidaforum.org" },
  { id: 6, title: "Sparkle-eye", category: "SaaS (WIP)", image: "/projects/sparkle-eye.jpg", url: "#" },
  { id: 7, title: "Awa-yoruba", category: "DESIGN (WIP)", image: "/projects/awa-yoruba.png", url: "#" },
  { id: 8, title: "Tooling & Plugins", category: "PRODUCT", image: "/projects/plugins.jpg", url: "#" },
  { id: 9, title: "Addiscent", category: "E-COMMERCE", image: "/projects/addiscent.jpg", url: "#" },
  { id: 10, title: "BeeSocials", category: "FINTECH", image: "/projects/beesocials.jpg", url: "#" },
  { id: 11, title: "Block-Scholars Africa", category: "WEB NGO", image: "/projects/bsa.jpg", url: "#" },
  { id: 12, title: "Customs Compliance AI", category: "PRODUCT", image: "/projects/customs.jpg", url: "#" },
];

const clientsData = [
  { id: 1, name: "Letsellify Technologies Ltd", role: "E-Commerce Platform", image: "/Nasiru.jpg" },
  { id: 2, name: "BSA (Block-Scholars Africa)", role: "Web Redesign", image: "/raphael.jpg" },
  { id: 3, name: "Habtech Construction Ltd", role: "Corporate Platform", image: "/habeeb.jpg" },
  { id: 4, name: "Sparkle Eye Specialist Hospital", role: "Management Portal", image: "/sparkle-eye.jpg" },
];

export default function WorksPage() {
  const [activeTab, setActiveTab] = useState<"projects" | "clients">("projects");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#080808] dark:text-zinc-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black antialiased transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row">
        
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="w-full shrink-0 p-5 sm:p-8 md:w-64 md:sticky md:top-0 md:h-screen flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Profile Avatar */}
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700/80 mb-6 shadow-md">
              <Image
                src="/oluwatosin.jpg"
                alt="Oluwatosin Adesoro"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Name & Bio */}
            <Link href="/" className="group inline-block">
              <h1 className="font-heading text-2xl font-normal tracking-tight text-zinc-900 dark:text-white group-hover:opacity-70 transition-opacity">
                Oluwatosin Adesoro
              </h1>
            </Link>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 mb-8">
              Product designer, design engineer &amp; coach based in Nigeria.
            </p>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-3.5 text-sm font-medium">
              <Link
                href="/works"
                className={
                  pathname === "/works"
                    ? "text-zinc-900 dark:text-white font-semibold underline decoration-pink-500 underline-offset-4"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                }
              >
                Works
              </Link>
              <Link href="#playground" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Playground
              </Link>
              <Link href="#timeline" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Timeline
              </Link>
              <Link href="#story" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Story
              </Link>
              <div className="pt-6 flex flex-col gap-3 text-xs text-zinc-400 dark:text-zinc-500">
                <Link href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/resume.pdf" target="_blank" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  Resume <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </nav>
          </div>

          {/* Social Footer */}
          <div className="pt-10 md:pt-0">
            <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 mb-2">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <SiX className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <SiYoutube className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
            <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">@oluwatosin</p>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="min-w-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 md:p-12">
          
          {/* Top Bar */}
          <header className="flex items-center justify-between pb-8">
            <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <SiYoutube className="h-4 w-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <SiX className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <SiInstagram className="h-4 w-4" />
              </a>
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle Theme"
                className="rounded-full p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
          </header>

          {/* Header Section */}
          <section className="mb-8 max-w-xl">
            <h1 className="font-heading text-3xl sm:text-4xl font-normal tracking-tight text-zinc-900 dark:text-white mb-3">
              Works
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              It has been an absolute pleasure to put my heart and soul into these projects. While you&apos;re here, browse these projects.
            </p>
          </section>

          {/* Pill Tabs: Projects / Clients */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === "projects"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-black shadow-sm"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === "clients"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-black shadow-sm"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Clients
            </button>
          </div>

          {/* Grid View with Tab Content Animation */}
          <AnimatePresence mode="wait">
            {activeTab === "projects" ? (
              <motion.div
                key="projects-grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
              >
                {projectsData.map((project, idx) => (
                  <motion.a
                    key={project.id}
                    href={project.url}
                    target={project.url.startsWith("http") ? "_blank" : undefined}
                    rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, y: 16, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotate: [-2.2, 1.4, -1.2, 2, -1.6, 1.2, -2, 1.6, -1, 1.8, -1.4, 1][idx],
                    }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    whileHover={{ y: -8, rotate: 0, scale: 1.018 }}
                    style={{ perspective: "1200px" }}
                    className="group relative aspect-square"
                  >
                    <div className="absolute inset-0 translate-x-1.5 translate-y-2 rounded-2xl border border-zinc-200/70 bg-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-950" />
                    <div className="absolute inset-0 -translate-x-1 translate-y-1 rounded-2xl border border-zinc-200/70 bg-zinc-100 dark:border-zinc-800/80 dark:bg-zinc-900" />
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-xl shadow-black/10 dark:border-zinc-700/80 dark:bg-zinc-900 dark:shadow-black/40 transition-shadow duration-300 group-hover:shadow-2xl">
                      <div className="absolute -inset-10 bg-white/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white/5" />
                      <div className="absolute inset-[7%] overflow-hidden rounded-xl border border-white/20 bg-zinc-200/40 dark:border-white/10 dark:bg-zinc-950/40">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 backdrop-blur-md">
                        <span className="font-mono text-[8px] font-semibold tracking-[0.16em] text-white/85">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
                        <div className="rounded-lg border border-white/15 bg-black/45 px-2.5 py-2 backdrop-blur-md">
                          <p className="text-[11px] font-medium leading-tight text-white">{project.title}</p>
                        </div>
                        {project.url.startsWith("http") && (
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md">
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="clients-grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {clientsData.map((client, idx) => (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.04 }}
                    className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4"
                  >
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-200 shrink-0">
                      <Image src={client.image} alt={client.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">
                        {client.name}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {client.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}