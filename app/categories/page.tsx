"use client";

import Link from "next/link";
import {
  Building2,
  Brain,
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "AI Research",
    description:
      "Companies focused on advancing artificial intelligence research and foundation models.",
    icon: Brain,
    count: 3,
  },
  {
    name: "Generative AI",
    description:
      "Companies building AI tools for creating text, images, video and other content.",
    icon: Sparkles,
    count: 3,
  },
  {
    name: "AI Platforms",
    description:
      "Companies providing AI platforms, infrastructure and tools for developers.",
    icon: Search,
    count: 2,
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
              <Building2 size={20} />
            </div>

            <div>
              <h1 className="text-xl font-bold">AI ORBIT</h1>
              <p className="text-xs text-zinc-500">
                Companies Directory
              </p>
            </div>
          </Link>

          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/companies" className="transition hover:text-white">
              Companies
            </Link>

            <Link href="/categories" className="text-white">
              Categories
            </Link>
          </nav>
        </div>
      </header>

      {/* Page heading */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-zinc-500">
            EXPLORE BY CATEGORY
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Discover AI companies by category.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Explore different areas of artificial intelligence and discover
            companies shaping the future of technology.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={`/companies?category=${encodeURIComponent(category.name)}`}
                className="group rounded-2xl border border-white/10 bg-[#111113] p-6 transition hover:border-white/25 hover:bg-[#161618]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <Icon size={24} className="text-zinc-300" />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {category.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {category.description}
                </p>

                <p className="mt-6 text-sm text-zinc-500">
                  {category.count} companies
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}