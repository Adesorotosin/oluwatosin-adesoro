"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Sun,
  Moon,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SiX, SiYoutube, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { useTheme } from "next-themes";

const MotionLink = motion.create(Link);

type ProjectMediaType =
  | "photo"
  | "interface"
  | "transparent"
  | "mobile"
  | "poster";

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  fallbackGradient: string;
  url: string;
  mediaType: ProjectMediaType;
  mediaScale: string;
};

const currentProjects: Project[] = [
  {
    id: 1,
    title: "GoalHyke",
    category: "AI PRODUCT",
    year: "2026",
    image: "/projects/Goalhyke.jpg",
    fallbackGradient:
      "from-emerald-500/20 via-teal-900/30 to-transparent",
    url: "https://goalhyke.com",
    mediaType: "interface",
    mediaScale: "scale-[0.86]",
  },
  {
    id: 2,
    title: "Letsellify",
    category: "E-COMMERCE",
    year: "2024",
    image: "/projects/Letsellify.jpg",
    fallbackGradient:
      "from-blue-600/30 via-indigo-900/20 to-transparent",
    url: "#",
    mediaType: "interface",
    mediaScale: "scale-[0.86]",
  },
  {
    id: 3,
    title: "ContriHub",
    category: "FINTECH",
    year: "2026",
    image: "/projects/contrihub-3d-graphic.png",
    fallbackGradient:
      "from-purple-600/30 via-fuchsia-900/20 to-transparent",
    url: "https://contribhub.netlify.app/",
    mediaType: "transparent",
    mediaScale: "scale-[0.72]",
  },
  {
    id: 4,
    title: "Habtech",
    category: "CONSTRUCTION",
    year: "2026",
    image: "/projects/Habtech.jpg",
    fallbackGradient:
      "from-amber-500/20 via-orange-900/20 to-transparent",
    url: "https://habtechconstruction.com/",
    mediaType: "photo",
    mediaScale: "scale-100",
  },
  {
    id: 5,
    title: "Bida Forum",
    category: "WEB NGO",
    year: "2025",
    image: "/projects/Bida Forum.jpg",
    fallbackGradient:
      "from-rose-500/20 via-pink-900/20 to-transparent",
    url: "https://bida-forum.vercel.app/",
    mediaType: "interface",
    mediaScale: "scale-[0.86]",
  },
  {
    id: 6,
    title: "Sparkle-eye",
    category: "SaaS (WIP)",
    year: "2026",
    image: "/projects/sparkle-eye.jpg",
    fallbackGradient:
      "from-indigo-500/20 via-blue-900/20 to-transparent",
    url: "#",
    mediaType: "interface",
    mediaScale: "scale-[0.82]",
  },
  {
    id: 7,
    title: "Awa-yoruba",
    category: "DESIGN (WIP)",
    year: "2026",
    image: "/projects/awa-yoruba.png",
    fallbackGradient:
      "from-cyan-500/20 via-sky-900/20 to-transparent",
    url: "#",
    mediaType: "poster",
    mediaScale: "scale-[0.78]",
  },
  {
    id: 8,
    title: "Tooling & Plugins",
    category: "PRODUCT",
    year: "2024",
    image: "/projects/plugins.jpg",
    fallbackGradient:
      "from-yellow-500/20 via-amber-900/20 to-transparent",
    url: "#",
    mediaType: "interface",
    mediaScale: "scale-[0.82]",
  },
];

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
  const [direction, setDirection] = useState(1);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

  const resetAutoPlayTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      handleNextTestimonial();
    }, 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNextTestimonial();
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const activeTestimonial = testimonials[currentTestimonialIdx];

  const cardRotations = [-2.2, 1.4, -1.2, 2, -1.6, 1.2, -2, 1.6];

  const cardVariants: Variants = {
    initial: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 40 : -40,
      scale: 0.96,
    }),

    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },

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
    <div className="min-h-screen bg-white font-sans text-zinc-900 antialiased transition-colors duration-300 selection:bg-black selection:text-white dark:bg-[#080808] dark:text-zinc-100 dark:selection:bg-white dark:selection:text-black">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col md:flex-row">
        {/* ================= LEFT SIDEBAR ================= */}

        <aside className="w-full shrink-0 p-4 sm:p-6 md:sticky md:top-0 md:h-screen md:w-64 md:p-8">
          <div className="flex h-full flex-col justify-between overflow-visible md:overflow-y-auto">
            <div className="min-w-0">
              <div className="flex items-center gap-3 md:block">
                {/* Profile Avatar */}
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-zinc-200 shadow-md dark:border-zinc-700/80 md:mb-6 md:h-16 md:w-16">
                  <Image
                    src="/oluwatosin.jpg"
                    alt="Oluwatosin Adesoro"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="min-w-0 md:contents">
                  <h1 className="font-heading text-2xl font-normal tracking-tight text-zinc-900 dark:text-white">
                    Oluwatosin Adesoro
                  </h1>

                  <p className="mt-2 mb-8 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Product designer, design engineer &amp; coach based in
                    Nigeria.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-4 flex max-w-full gap-4 overflow-x-auto pb-1 text-sm font-medium scrollbar-none md:mt-0 md:flex-col md:gap-3.5 md:overflow-visible md:pb-0">
                <Link
                  href="/works"
                  className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  Works
                </Link>

                <Link
                  href="#playground"
                  className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  Playground
                </Link>

                <Link
                  href="#timeline"
                  className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  Timeline
                </Link>

                <Link
                  href="#story"
                  className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  Story
                </Link>

                <div className="hidden flex-col gap-3 pt-6 text-xs text-zinc-400 dark:text-zinc-500 md:flex">
                  <Link
                    href="#about"
                    className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                  >
                    About
                  </Link>

                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-1 transition-colors hover:text-zinc-900 dark:hover:text-white"
                  >
                    Resume
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </nav>
            </div>

            {/* Social Footer */}
            <div className="hidden pt-10 md:block md:pt-0">
              <div className="mb-2 flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  <SiX className="h-4 w-4" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  <SiYoutube className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              </div>

              <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                @oluwatosin
              </p>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}

        <main className="min-w-0 flex-1 overflow-x-hidden px-4 py-5 sm:px-6 sm:py-8 md:p-12">
          {/* Top Bar */}
          <header className="flex items-center justify-between pb-7 sm:pb-10">
            <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                <SiYoutube className="h-4 w-4" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                <SiX className="h-4 w-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-zinc-900 dark:hover:text-white"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                type="button"
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                aria-label="Toggle Theme"
                className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-white"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}
          </header>

          {/* Hero */}
          <section className="mb-10 max-w-2xl sm:mb-14">
            <h2 className="mb-4 font-heading text-3xl font-normal tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Hi, I&apos;m Oluwatosin Adesoro.
            </h2>

            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-relaxed">
              Right now, I&apos;m focusing on building{" "}
              <strong className="font-semibold text-zinc-900 dark:text-white">
                Ergonomic
              </strong>{" "}
              and high-trust digital products. Alongside that, I work on
              contract product design, design systems, and frontend tools for
              high-growth tech ventures.
            </p>
          </section>

          {/* ================= CURRENT PROJECTS ================= */}

          <section
            id="works"
            className="mb-16 scroll-mt-8 sm:mb-20"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                CURRENT PROJECTS
              </h3>

              <Link
                href="#works"
                className="flex items-center gap-1 text-xs font-medium text-indigo-600 transition-colors hover:underline dark:text-indigo-400"
              >
                All Works
                <span className="text-[10px]">▸</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[390px]:grid-cols-2 min-[390px]:gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-4.5">
              {currentProjects.map((project, idx) => {
                const isExternal = project.url.startsWith("http");

                const mediaFrameClass = {
                  photo: "bg-zinc-100 dark:bg-zinc-900",
                  interface:
                    "bg-zinc-100/80 dark:bg-zinc-950/60",
                  transparent: "bg-transparent",
                  mobile:
                    "bg-zinc-100/70 dark:bg-zinc-950/50",
                  poster:
                    "bg-zinc-100 dark:bg-zinc-950/40",
                }[project.mediaType];

                const mediaFitClass =
                  project.mediaType === "photo"
                    ? "object-cover"
                    : "object-contain";

                return (
                  <MotionLink
                    key={project.id}
                    href={project.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={
                      isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -8,
                      rotate: 0,
                      scale: 1.018,
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ perspective: "1200px" }}
                    className="group relative aspect-4/5 min-w-0 cursor-pointer overflow-visible rounded-[1.35rem] min-[390px]:aspect-square"
                  >
                    <motion.div
                      initial={{
                        rotate: cardRotations[idx],
                      }}
                      animate={{
                        rotate: cardRotations[idx],
                      }}
                      whileHover={{ rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                      className="relative h-full w-full overflow-visible rounded-[1.35rem]"
                    >
                      {/* Depth layer */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-1 rounded-[1.25rem] border border-black/10 bg-zinc-200/80 shadow-xl dark:border-white/5 dark:bg-zinc-800/70"
                        style={{
                          transform:
                            "translateZ(-28px) translateY(10px) scale(.94)",
                        }}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-[1.35rem] border border-black/10 bg-zinc-100 shadow-2xl dark:border-white/10 dark:bg-zinc-900"
                        style={{
                          transform:
                            "translateZ(-14px) translateY(5px) scale(.975)",
                        }}
                      />

                      {/* Main card */}
                      <div
                        className="relative h-full w-full overflow-hidden rounded-[1.35rem] border border-zinc-200/90 bg-zinc-100/95 p-2 shadow-[0_24px_55px_-24px_rgba(0,0,0,0.45)] dark:border-zinc-700/70 dark:bg-zinc-900/95 dark:shadow-[0_28px_65px_-25px_rgba(0,0,0,0.8)]"
                        style={{
                          transform: "translateZ(0)",
                        }}
                      >
                        {/* Ambient glow */}
                        <div
                          aria-hidden="true"
                          className={`absolute -inset-4 bg-linear-to-br ${project.fallbackGradient} opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                        />

                        {/* Media */}
                        <div
                          className={`absolute inset-x-2.5 top-2.5 bottom-11 flex items-center justify-center overflow-hidden rounded-[1rem] ${mediaFrameClass}`}
                          style={{
                            transform: "translateZ(30px)",
                          }}
                        >
                          <div
                            className={`relative h-full w-full ${project.mediaScale} transition-transform duration-500 ease-out group-hover:scale-[1.045]`}
                          >
                            <Image
                              src={project.image}
                              alt={`${project.title} project`}
                              fill
                              className={`rounded-xl ${mediaFitClass}`}
                              sizes="(max-width: 640px) 43vw, (max-width: 1024px) 29vw, 20vw"
                            />
                          </div>
                        </div>

                        {/* Glass edge */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-2 rounded-[1.05rem] border border-white/20 opacity-70 dark:border-white/10"
                          style={{
                            transform: "translateZ(38px)",
                          }}
                        />

                        {/* Mobile information */}
                        <div className="absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/95 via-black/65 to-transparent p-2.5 pt-8 sm:p-3 sm:pt-10 md:hidden">
                          <span className="block truncate font-mono text-[7px] font-semibold uppercase tracking-[0.14em] text-zinc-300 sm:text-[8px]">
                            {project.category}
                          </span>

                          <div className="mt-0.5 flex items-end justify-between gap-1.5">
                            <div className="min-w-0">
                              <span className="block font-mono text-[8px] font-medium tracking-wider text-emerald-400 sm:text-[9px]">
                                {project.year}
                              </span>

                              <h4 className="truncate font-heading text-sm font-normal leading-snug tracking-tight text-white sm:text-base">
                                {project.title}
                              </h4>
                            </div>

                            {isExternal && (
                              <ArrowUpRight className="mb-0.5 h-3.5 w-3.5 shrink-0 text-white sm:h-4 sm:w-4" />
                            )}
                          </div>
                        </div>

                        {/* Desktop hover panel */}
                        <div
                          className={`absolute inset-0 z-30 hidden bg-linear-to-br ${project.fallbackGradient} bg-zinc-950/90 p-4 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 md:flex md:flex-col md:justify-between`}
                          style={{
                            transform: "translateZ(48px)",
                          }}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-zinc-400">
                              {project.category}
                            </span>

                            {isExternal && (
                              <ArrowUpRight className="h-4 w-4 shrink-0 text-white transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                            )}
                          </div>

                          <div>
                            <span className="block font-mono text-[10px] font-medium tracking-wider text-emerald-400">
                              {project.year}
                            </span>

                            <h4 className="mt-0.5 font-heading text-sm font-normal leading-snug tracking-tight text-white sm:text-lg">
                              {project.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </MotionLink>
                );
              })}
            </div>
          </section>

          {/* ================= STATS ================= */}

          <section
            id="timeline"
            className="mb-14 scroll-mt-8 sm:mb-16"
          >
            <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800/60 md:grid-cols-3">
              <div className="flex min-h-40 items-center justify-center bg-[#EAEAEA] p-6 text-zinc-900 sm:min-h-50 sm:p-8">
                <h3 className="text-xl font-medium tracking-tight">
                  Stats &amp; Facts
                </h3>
              </div>

              <div className="flex min-h-40 flex-col items-start justify-center bg-[#2B2B2E] p-6 text-white sm:min-h-50 sm:p-8">
                <span className="text-5xl font-extrabold tracking-tight">
                  4+
                </span>

                <span className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
                  YEARS IN DESIGN
                </span>
              </div>

              <div className="relative flex h-full min-h-50 items-center justify-center overflow-hidden bg-[#6B1854] p-4">
                <div className="relative h-[180px] w-full overflow-hidden rounded-lg bg-white/10 p-2 shadow-lg">
                  <Image
                    src="/projects/Bida Forum.jpg"
                    alt="SaaS Dashboard Design"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              <div className="flex min-h-48 flex-col justify-between bg-[#0A0A0A] p-6 sm:min-h-55 sm:p-8">
                <p className="max-w-xs text-sm leading-relaxed text-zinc-300">
                  SaaS dashboards, mobile apps, e-commerce — each one
                  designed to solve real problems.
                </p>

                <div className="mt-6">
                  <a
                    href="mailto:contact@example.com"
                    className="inline-block bg-[#00C82C] px-5 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-[#00e833]"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              <div className="relative flex min-h-48 h-full items-center justify-center overflow-hidden bg-[#0A4B82] p-4 sm:min-h-55">
                <div className="relative h-[180px] w-full">
                  <Image
                    src="/projects/stats.jpg"
                    alt="Mobile & Tablet Product Design"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              <div className="flex min-h-55 flex-col">
                <div className="flex flex-1 flex-col items-start justify-center border-b border-zinc-800/40 bg-[#0A0A0A] p-6">
                  <span className="text-4xl font-extrabold tracking-tight text-white">
                    10+
                  </span>

                  <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                    CLIENTS
                  </span>
                </div>

                <div className="flex flex-1 items-center bg-[#EAEAEA] p-6 text-zinc-800">
                  <p className="text-xs font-medium leading-relaxed">
                    Collaborations that span time zones, cultures, and
                    industries — all with one shared goal: great design.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= TESTIMONIALS ================= */}

          <section
            id="story"
            className="mb-14 scroll-mt-8 sm:mb-16"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Testimonials
              </h3>

              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Kind words from great people
              </p>
            </div>

            <div className="relative flex min-h-[430px] flex-col items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/30 sm:min-h-105 sm:p-12">
              <div className="relative my-auto flex min-h-[250px] w-full max-w-lg items-center justify-center pt-4 sm:min-h-65">
                <div className="pointer-events-none absolute -top-3 left-1/2 h-full w-[88%] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800/40 dark:bg-zinc-900/40" />

                <div className="pointer-events-none absolute -top-1.5 left-1/2 h-full w-[94%] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-zinc-100 shadow-md dark:border-zinc-800/60 dark:bg-zinc-900/70" />

                <AnimatePresence
                  mode="wait"
                  custom={direction}
                >
                  <motion.div
                    key={activeTestimonial.id}
                    custom={direction}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative z-10 flex w-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xl dark:border-zinc-800 dark:bg-[#121214] sm:p-10"
                  >
                    <p className="mb-6 text-center font-serif text-base italic leading-7 text-zinc-700 dark:text-zinc-200 sm:mb-8 sm:text-xl sm:leading-relaxed">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </p>

                    <div className="flex items-center justify-between border-t border-zinc-200 pt-4 dark:border-zinc-800/60">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
                          <Image
                            src={activeTestimonial.avatar}
                            alt={activeTestimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h4 className="max-w-[150px] truncate text-xs font-semibold leading-snug text-zinc-900 dark:text-white sm:max-w-none sm:text-sm">
                            {activeTestimonial.author}
                          </h4>

                          <p className="max-w-[150px] truncate text-[10px] text-zinc-500 dark:text-zinc-400 sm:max-w-none sm:text-xs">
                            {activeTestimonial.role}
                          </p>
                        </div>
                      </div>

                      <span className="hidden items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 sm:inline-flex">
                        🌱 {activeTestimonial.tag}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    handlePrevTestimonial();
                    resetAutoPlayTimer();
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all hover:border-zinc-400 hover:text-zinc-900 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

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
                  type="button"
                  onClick={() => {
                    handleNextTestimonial();
                    resetAutoPlayTimer();
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all hover:border-zinc-400 hover:text-zinc-900 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>

          {/* ================= PLAYGROUND ================= */}

          <section
            id="playground"
            className="mb-16 scroll-mt-8 sm:mb-20"
          >
            <div className="mb-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                PLAYGROUND
              </p>

              <h3 className="mt-2 font-heading text-3xl font-normal tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Experiments, ideas &amp; things I&apos;m learning.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Not everything starts as a client project. This is where I
                explore interfaces, AI-assisted workflows, visual systems,
                product ideas and small experiments that help me become a
                better designer and builder.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                [
                  "AI + Product Experiments",
                  "Exploring practical AI interfaces, agents and product concepts.",
                  "01",
                ],
                [
                  "Design Systems",
                  "Testing typography, interaction patterns and reusable UI systems.",
                  "02",
                ],
                [
                  "Frontend Builds",
                  "Turning selected design ideas into working interfaces with modern web tools.",
                  "03",
                ],
                [
                  "Product Ideas",
                  "Early concepts shaped around real problems worth solving.",
                  "04",
                ],
              ].map(([title, description, number]) => (
                <motion.div
                  key={number}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all duration-300 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-widest text-zinc-400">
                      {number}
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h4 className="mt-8 text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
                    {title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ================= ABOUT ================= */}

          <section
            id="about"
            className="mb-16 scroll-mt-8 sm:mb-20"
          >
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-10">
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    ABOUT
                  </p>

                  <h3 className="mt-3 font-heading text-3xl font-normal tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                    Designing useful things for real people.
                  </h3>
                </div>

                <div className="space-y-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  <p>
                    I work across product design, UX strategy, design systems
                    and frontend implementation — connecting thoughtful
                    interface design with the practical realities of building
                    digital products.
                  </p>

                  <p>
                    My approach sits between empathy and execution: understand
                    the people using a product, simplify the problem, design
                    the experience, then help turn the idea into something
                    that actually works.
                  </p>

                  <p>
                    I enjoy working with ambitious teams and founders building
                    products that solve meaningful problems, especially where
                    good design can create more trust, clarity and momentum.
                  </p>

                  <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-3">
                    <div className="border-l border-zinc-300 pl-3 dark:border-zinc-700">
                      <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                        Focus
                      </span>

                      <span className="mt-1 block text-xs font-medium text-zinc-900 dark:text-white">
                        Product &amp; UX
                      </span>
                    </div>

                    <div className="border-l border-zinc-300 pl-3 dark:border-zinc-700">
                      <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                        Build
                      </span>

                      <span className="mt-1 block text-xs font-medium text-zinc-900 dark:text-white">
                        Design + Frontend
                      </span>
                    </div>

                    <div className="border-l border-zinc-300 pl-3 dark:border-zinc-700">
                      <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                        Based
                      </span>

                      <span className="mt-1 block text-xs font-medium text-zinc-900 dark:text-white">
                        Nigeria · Global
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= FOOTER ================= */}

          <footer className="relative mt-20 overflow-hidden border-t border-zinc-200 pt-12 pb-8 dark:border-neutral-800/60 sm:mt-32 sm:pt-20">
            <div className="relative z-10 grid max-w-4xl grid-cols-1 gap-12 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400 md:grid-cols-2">
              <div className="space-y-4 font-light">
                <p>
                  I&apos;m open to new opportunities — full-time, freelance, or
                  somewhere in between. Mostly looking to work on things
                  I&apos;d be proud of, with people I&apos;d learn from.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <p>
                  Feel free to reach out{" "}
                  <Link
                    href="https://twitter.com/designerTos"
                    target="_blank"
                    className="font-semibold text-zinc-900 underline decoration-zinc-400 hover:decoration-zinc-900 dark:text-white dark:decoration-neutral-600 dark:hover:decoration-white"
                  >
                    @designerTos
                  </Link>{" "}
                  or via{" "}
                  <Link
                    href="mailto:oluwatosinadesoro96@gmail.com"
                    className="font-semibold text-zinc-900 underline decoration-zinc-400 hover:decoration-zinc-900 dark:text-white dark:decoration-neutral-600 dark:hover:decoration-white"
                  >
                    email.
                  </Link>
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute right-0 bottom-0 select-none p-4 text-right font-mono text-[10px] text-zinc-400 dark:text-neutral-800">
              BUILD NO. 26.09.22 (ACT.)
              <br />
              LAGOS/NGA
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}