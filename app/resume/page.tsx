import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Résumé | Oluwatosin Adesoro",
  description: "View the résumé of Oluwatosin Adesoro.",
};

export default function ResumePage() {
  return <main className="min-h-screen bg-white text-zinc-900 dark:bg-[#080808] dark:text-zinc-100">
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-5 sm:px-8 sm:py-8">
      <header className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-[#16BA16]"><ArrowLeft className="h-4 w-4"/> Back to portfolio</Link>
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Résumé · PDF viewer</span>
      </header>
      <section className="flex flex-1 flex-col pt-6">
        <div className="mb-4 flex items-center justify-between gap-3"><div><h1 className="font-heading text-3xl sm:text-4xl">Résumé</h1><p className="mt-1 text-sm text-zinc-500">Oluwatosin Adesoro · Product Design Consultant & Product Engineer</p></div><a href="/resume.pdf#toolbar=0&navpanes=0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs transition hover:border-[#16BA16] dark:border-zinc-800"><ExternalLink className="h-3.5 w-3.5"/> Open PDF</a></div>
        <div className="min-h-[70vh] flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"><iframe title="Oluwatosin Adesoro résumé" src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1" className="h-[78vh] min-h-[600px] w-full" /></div>
        <p className="mt-3 text-xs text-zinc-500">The embedded viewer hides its standard toolbar where supported. Browser-level saving or printing cannot be completely prevented.</p>
      </section>
    </div>
  </main>;
}