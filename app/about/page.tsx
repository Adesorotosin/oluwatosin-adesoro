import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Compass, Layers3, Code2, Users } from "lucide-react";

export const metadata = {
  title: "About | Oluwatosin Adesoro",
  description: "Meet Oluwatosin Adesoro — product designer and design engineer working across research, design, and frontend implementation.",
};

const principles = [
  { icon: Compass, title: "Start with the problem", body: "I look for the real user need, the context around it, and the moments where an experience becomes confusing or slow." },
  { icon: Layers3, title: "Make complexity feel clear", body: "From marketplaces to healthcare workflows, I turn complex journeys into interfaces people can understand and trust." },
  { icon: Code2, title: "Design with delivery in mind", body: "I care about how the work behaves in the real world, so I pair strong interaction design with practical frontend implementation." },
  { icon: Users, title: "Build with people", body: "Good work comes from listening, sharing context early, testing assumptions, and making thoughtful decisions together." },
];

export default function AboutPage() {
  return <main className="min-h-screen bg-white text-zinc-900 dark:bg-[#080808] dark:text-zinc-100">
    <div className="mx-auto max-w-5xl px-5 py-7 sm:px-8 sm:py-10">
      <header className="flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-[#16BA16]"><ArrowLeft className="h-4 w-4" /> Back to portfolio</Link>
        <Link href="/works" className="text-sm text-zinc-500 transition hover:text-[#16BA16]">Selected work <ArrowUpRight className="inline h-4 w-4" /></Link>
      </header>
      <section className="grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1.15fr_.85fr] md:gap-16">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#16BA16]">A LITTLE ABOUT ME</p>
          <h1 className="mt-5 font-heading text-5xl leading-[1.02] tracking-tight sm:text-7xl">Curious by nature.<br/>Product-minded by design.</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300">I’m Oluwatosin Adesoro, a product designer and design engineer based in Lagos, Nigeria. I work at the intersection of user understanding, thoughtful interfaces, and the craft of making digital products real.</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">Across healthcare, e-commerce, education, logistics, and AI-assisted workflows, I enjoy finding the signal in complicated problems and shaping it into a clear experience.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/#contact" className="rounded-full bg-[#16BA16] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[#128F12]">Work with me <ArrowUpRight className="ml-1 inline h-4 w-4"/></Link><Link href="/resume" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium transition hover:border-[#16BA16] dark:border-zinc-700">View résumé</Link></div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-[#16BA16]/10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"><Image src="/oluwatosin.jpg" alt="Oluwatosin Adesoro" fill priority className="object-cover" sizes="(max-width: 768px) 85vw, 360px"/></div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl dark:border-zinc-700 dark:bg-zinc-900"><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Based in</p><p className="mt-1 text-sm font-medium">Lagos, Nigeria · Working globally</p></div>
        </div>
      </section>
      <section className="border-t border-zinc-200 py-12 dark:border-zinc-800 sm:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[.2em] text-zinc-500">HOW I APPROACH THE WORK</p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl sm:text-4xl">Thoughtful enough to ask why. Practical enough to ship.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">{principles.map(({icon: Icon,title,body},i)=><article key={title} className="rounded-2xl border border-zinc-200 p-5 transition hover:border-[#16BA16]/50 dark:border-zinc-800 sm:p-6"><div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16BA16]/10 text-[#16BA16]"><Icon className="h-5 w-5"/></span><span className="font-mono text-xs text-zinc-400">0{i+1}</span></div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{body}</p></article>)}</div>
      </section>
      <section className="grid gap-6 border-t border-zinc-200 py-12 dark:border-zinc-800 sm:grid-cols-[.7fr_1.3fr] sm:py-16"><h2 className="font-heading text-3xl sm:text-4xl">A mix of strategy, design, and build.</h2><div><p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">My background is in Building Technology, and that foundation still shapes how I think: understand the structure, see how the pieces connect, and design for what needs to work together. Today, I bring that systems mindset into digital products.</p><div className="mt-6 flex flex-wrap gap-2">{["Product strategy","UX research","Interaction design","Design systems","Prototyping","Next.js & React","Design-to-code"].map(skill=><span key={skill} className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">{skill}</span>)}</div></div></section>
      <footer className="flex flex-col gap-4 border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between"><span>Have a good problem to solve?</span><Link href="/#contact" className="font-semibold text-[#16BA16]">Let’s make something useful <ArrowUpRight className="inline h-4 w-4"/></Link></footer>
    </div>
  </main>;
}