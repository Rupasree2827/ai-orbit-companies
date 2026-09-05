"use client";

import Link from "next/link";
import { Building2, Search, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
              <Building2 size={20} />
            </div>

            <div>
              <h1 className="text-xl font-bold">AI ORBIT</h1>
              <p className="text-xs text-zinc-500">
                Companies Directory
              </p>
            </div>
          </div>

          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/" className="text-white">
              Home
            </Link>

            <Link
              href="/companies"
              className="transition hover:text-white"
            >
              Companies
            </Link>

            <Link
              href="/categories"
              className="transition hover:text-white"
            >
              Categories
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6">
        <p className="mb-5 text-sm font-medium tracking-[0.2em] text-zinc-500">
          EXPLORE THE FUTURE OF ARTIFICIAL INTELLIGENCE
        </p>

        <h2 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Discover the companies building the future of AI.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          AI ORBIT helps you explore innovative artificial intelligence
          companies, discover their work, and learn about the global AI
          ecosystem.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/companies"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-medium text-black transition hover:bg-zinc-200"
          >
            Explore Companies
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/companies"
            className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-4 font-medium transition hover:bg-white/5"
          >
            <Search size={18} />
            Search Directory
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#111113] p-6">
            <Building2 className="mb-5 text-zinc-300" size={28} />

            <h3 className="text-lg font-semibold">
              AI Companies
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Explore innovative companies working across the artificial
              intelligence ecosystem.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111113] p-6">
            <Search className="mb-5 text-zinc-300" size={28} />

            <h3 className="text-lg font-semibold">
              Smart Discovery
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Search and filter companies based on their location and
              discover relevant organizations quickly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111113] p-6">
            <ArrowRight className="mb-5 text-zinc-300" size={28} />

            <h3 className="text-lg font-semibold">
              Explore Details
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Learn more about each company, its location, description,
              and official website.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}