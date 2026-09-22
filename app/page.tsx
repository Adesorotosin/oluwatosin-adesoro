"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sun, Moon, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SiX, SiYoutube, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { useTheme } from "next-themes";

// Create an animated Link component for Framer Motion
const MotionLink = motion.create(Link);

// Mock data for current project cards with external/internal links added
const currentProjects = [
  {
    id: 1,
    title: "GoalHyke",
    category: "AI PRODUCT",
    year: "2026",
    image: "/projects/Goalhyke.jpg",
    fallbackGradient: "from-emerald-500/20 via-teal-900/30 to-transparent",
    url: "https://goalhyke.com", // Add your link here
  },
  {
    id: 2,
    title: "Letsellify",
    category: "E-COMMERCE",
    year: "2024",
    image: "/projects/letsellify.jpg",
    fallbackGradient: "from-blue-600/30 via-indigo-900/20 to-transparent",
    url: "#",
  },
  {
    id: 3,
    title: "ContriHub",
    category: "FINTECH",
    year: "2026",
    image: "/projects/contrihub-3d-graphic.png",
    fallbackGradient: "from-purple-600/30 via-fuchsia-900/20 to-transparent",
    url: "https://contribhub.netlify.app/",
  },
  {
    id: 4,
    title: "Habtech",
    category: "CONSTRUCTION",
    year: "2026",
    image: "/projects/Habtech.jpg",
    fallbackGradient: "from-amber-500/20 via-orange-900/20 to-transparent",
    url: "https://habtechconstruction.com/",
  },
  {
    id: 5,
    title: "Bida Forum",
    category: "WEB NGO",
    year: "2025",
    image: "/projects/Bida Forum.jpg",
    fallbackGradient: "from-rose-500/20 via-pink-900/20 to-transparent",
    url: "https://bida-forum.vercel.app/",
  },
  {
    id: 6,
    title: "Sparkle-eye",
    category: "SaaS (WIP)",
    year: "2026",
    image: "/projects/sparkle-eye.jpg",
    fallbackGradient: "from-indigo-500/20 via-blue-900/20 to-transparent",
    url: "#",
  },
  {
    id: 7,
    title: "Awa-yoruba",
    category: "DESIGN (WIP)",
    year: "2026",
    image: "/projects/awa-yoruba.png",
    fallbackGradient: "from-cyan-500/20 via-sky-900/20 to-transparent",
    url: "#",
  },
  {
    id: 8,
    title: "Tooling & Plugins",
    category: "PRODUCT",
    year: "2024",
    image: "/projects/plugins.jpg",
    fallbackGradient: "from-yellow-500/20 via-amber-900/20 to-transparent",
    url: "#",
  },
];

// Mock data for Testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "Oluwatosin is a creative UIUX designer who can handle tasks without much needed instructions and guidance. If you're considering to give him a trial, I recommend you do.",
    author: "Nasiru Muhammad",
    role: "CEO, Letsellify Technologies Ltd",
    avatar: "/Nasiru.jpg",
    tag: "Invested",
  },
  {
    id: 2,
    quote:
      "Really impressed! Love it! I agree with the users; the website is elegant and neat. It's a success. It's very satisfying.",
    author: "Raphael Omochor",
    role: "CEO, BSA",
    avatar: "/raphael.jpg",
    tag: "Client",
  },
  {
    id: 3,
    quote:
      "Wow! I was really impressed on the job well done, the website is sleek and modern",
    author: "Habeeb Kareem",
    role: "Founder, Habtech Construction Ltd",
    avatar: "/habeeb.jpg",
    tag: "Client",
  },
];

export default function Home() {
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next (upwards entry), -1 for prev
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonialIdx((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonialIdx((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Reset auto-play timer when manual navigation occurs
  const resetAutoPlayTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNextTestimonial();
    }, 5000);
  };

  // Auto-play interval effect (5 seconds)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNextTestimonial();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const activeTestimonial = testimonials[currentTestimonialIdx];

  // Framer Motion Animation Variants for the Testimonial Card
  const cardVariants: Variants = {
    initial: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 40 : -40,
      scale: 0.96,
    }),
    animate: () => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -40 : 40,
      scale: 0.96,
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#080808] dark:text-zinc-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black antialiased transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row">
        
        {/* ================= LEFT SIDEBAR (FIXED / STICKY) ================= */}
       <aside className="w-full md:w-64 shrink-0 p-8 md:sticky md:top-0 md:h-screen flex flex-col justify-between overflow-y-auto">
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
    <h1 className="font-(family-name:--font-bricolage)] text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
      Oluwatosin Adesoro
    </h1>
    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 mb-8">
      Product designer, design engineer &amp; coach based in Nigeria.
    </p>

    {/* Navigation Links */}
    <nav className="flex flex-col gap-3.5 text-sm font-medium">
      <Link 
  href="/works" 
  className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
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

        {/* ================= MAIN SCROLLABLE AREA ================= */}
        <main className="flex-1 p-8 md:p-12 overflow-y-auto">
          
          {/* Top Bar */}
          <header className="flex items-center justify-between pb-10">
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

            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle Theme"
                className="rounded-full p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}
          </header>

          {/* Hero Section */}
          <section className="mb-14 max-w-2xl">
            <h2 className="font-(family-name:--font-bricolage) text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
              Hi, I&apos;m Oluwatosin Adesoro.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
              Right now, I&apos;m focusing on building <strong className="text-zinc-900 dark:text-white font-semibold">Ergonomic</strong> and high-trust digital products. Alongside that, I work on contract product design, design systems, and frontend tools for high-growth tech ventures.
            </p>
          </section>

          {/* Current Projects Grid */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                CURRENT PROJECTS
              </h3>
              <Link href="#works" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline transition-colors flex items-center gap-1 font-medium">
                All Works <span className="text-[10px]">▸</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
              {currentProjects.map((project, idx) => {
                const isExternal = project.url.startsWith("http");
                return (
                  <MotionLink
                    key={project.id}
                    href={project.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    whileHover={{ scale: 1.025 }}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 shadow-md flex items-center justify-center p-2"
                  >
                    {/* Full width image container */}
                    <div className="relative w-full h-24 overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-95">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${project.fallbackGradient} bg-zinc-950/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-between z-10`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase font-semibold">
                          {project.category}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>

                      <div>
                        <span className="font-mono text-[10px] text-emerald-400 font-medium tracking-wider block">
                          {project.year}
                        </span>
                        <h4 className="font-(family-name:--font-bricolage) text-base sm:text-lg font-bold text-white tracking-tight leading-snug mt-0.5">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </MotionLink>
                );
              })}
            </div>
          </section>

          {/* ================= STATS & FACTS BENTO GRID ================= */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden border border-zinc-200 dark:border-zinc-800/60 rounded-xl">
              
              {/* Row 1, Tile 1 */}
              <div className="bg-[#EAEAEA] text-zinc-900 p-8 flex items-center justify-center min-h-(200px)">
                <h3 className="text-xl font-medium tracking-tight">Stats &amp; Facts</h3>
              </div>

              {/* Row 1, Tile 2 */}
              <div className="bg-[#2B2B2E] text-white p-8 flex flex-col justify-center items-start min-h-(200px)">
                <span className="text-5xl font-extrabold tracking-tight">4+</span>
                <span className="font-mono text-xs tracking-widest text-zinc-400 mt-2 uppercase">
                  YEARS IN DESIGN
                </span>
              </div>

              {/* Row 1, Tile 3 */}
              <div className="bg-[#6B1854] p-4 flex items-center justify-center min-h-(200px) h-full relative overflow-hidden">
                <div className="relative w-full h-[180px] overflow-hidden rounded-lg bg-white/10 p-2 shadow-lg">
                  <Image
                    src="/projects/Bida Forum.jpg"
                    alt="SaaS Dashboard Design"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Row 2, Tile 1 */}
              <div className="bg-[#0A0A0A] p-8 flex flex-col justify-between min-h-(220px)">
                <p className="text-sm text-zinc-300 leading-relaxed max-w-xs">
                  SaaS dashboards, mobile apps, e-commerce — each one designed to solve real problems.
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:contact@example.com"
                    className="inline-block bg-[#00C82C] text-black font-semibold text-xs px-5 py-2.5 hover:bg-[#00e833] transition-colors"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              {/* Row 2, Tile 2 */}
              <div className="bg-[#0A4B82] p-4 flex items-center justify-center min-h-(220px) h-full relative overflow-hidden">
                <div className="relative w-full h-[180px]">
                  <Image
                    src="/projects/stats.jpg"
                    alt="Mobile & Tablet Product Design"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Row 2, Tile 3 */}
              <div className="flex flex-col min-h-(220px)">
                <div className="bg-[#0A0A0A] p-6 flex flex-col justify-center items-start flex-1 border-b border-zinc-800/40">
                  <span className="text-4xl font-extrabold text-white tracking-tight">10+</span>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-400 mt-1 uppercase">
                    CLIENTS
                  </span>
                </div>
                <div className="bg-[#EAEAEA] text-zinc-800 p-6 flex items-center flex-1">
                  <p className="text-xs leading-relaxed font-medium">
                    Collaborations that span time zones, cultures, and industries — all with one shared goal: great design.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ================= TESTIMONIALS SECTION ================= */}
          <section className="mb-16">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                Testimonials
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Kind words from great people
              </p>
            </div>

            {/* Container */}
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/30 p-8 sm:p-12 flex flex-col items-center justify-between min-h-(420px)">
              
              {/* Stacked Cards Wrapper */}
              <div className="relative w-full max-w-lg my-auto pt-4 min-h-(260px) flex items-center justify-center">
                
                {/* Stack effect background card 2 */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[88%] h-full rounded-2xl border border-zinc-200 dark:border-zinc-800/40 bg-zinc-100 dark:bg-zinc-900/40 shadow-sm pointer-events-none" />
                
                {/* Stack effect background card 1 */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[94%] h-full rounded-2xl border border-zinc-200 dark:border-zinc-800/60 bg-zinc-100 dark:bg-zinc-900/70 shadow-md pointer-events-none" />

                {/* Animated Active Front Card */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeTestimonial.id}
                    custom={direction}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative z-10 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214] p-8 sm:p-10 shadow-2xl flex flex-col justify-between"
                  >
                    {/* Quote Text */}
                    <p className="font-serif text-center text-zinc-700 dark:text-zinc-200 text-lg sm:text-xl leading-relaxed italic mb-8">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </p>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800/60">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800">
                          <Image
                            src={activeTestimonial.avatar}
                            alt={activeTestimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug">
                            {activeTestimonial.author}
                          </h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            {activeTestimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Badge */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        🌱 {activeTestimonial.tag}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() => {
                    handlePrevTestimonial();
                    resetAutoPlayTimer();
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-all active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentTestimonialIdx
                          ? "w-5 bg-emerald-500"
                          : "w-1.5 bg-zinc-300 dark:bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    handleNextTestimonial();
                    resetAutoPlayTimer();
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-all active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          </section>

          {/* NEW FOOTER Section */}
          <footer className="mt-32 pt-20 pb-8 border-t border-zinc-200 dark:border-neutral-800/60 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-600 dark:text-neutral-400 text-sm leading-relaxed max-w-4xl relative z-10">
              <div className="space-y-4 font-light">
                <p>
                  I&apos;m open to new opportunities — full-time, freelance, or somewhere in between.
                  Mostly looking to work on things I&apos;d be proud of, with people I&apos;d learn from.
                </p>
              </div>
              
              <div className="space-y-4 font-light">
                <p>
                  Feel free to reach out <Link href="https://twitter.com/designerTos" target="_blank" className="font-semibold text-zinc-900 dark:text-white underline decoration-zinc-400 dark:decoration-neutral-600 hover:decoration-zinc-900 dark:hover:decoration-white">@designerTos</Link> or via <Link href="mailto:oluwatosinadesoro96@gmail.com" className="font-semibold text-zinc-900 dark:text-white underline decoration-zinc-400 dark:decoration-neutral-600 hover:decoration-zinc-900 dark:hover:decoration-white">email.</Link>
                </p>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 p-4 font-mono text-zinc-400 dark:text-neutral-800 text-[10px] pointer-events-none select-none text-right">
              BUILD NO. 26.09.22 (ACT.)<br />
              LAGOS/NGA
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}