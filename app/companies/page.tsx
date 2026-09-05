"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import Link from "next/link";
import {
  Search,
  MapPin,
  ExternalLink,
  Building2,
  Loader2,
  User,
} from "lucide-react";

interface Company {
  id: string;
  name: string;
  location: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  description: string | null;
  image: string | null;
  website: string | null;
}

export default function CompaniesPage() {
    const searchParams = useSearchParams();
    const categoryFromUrl = searchParams.get("category") || "";
    const router = useRouter();
    const [user, setUser] = useState<{
  email: string;
} | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
const fetchUser = async () => {
  try {
    const response = await fetch("/api/auth/me");
    const result = await response.json();

    if (result.success) {
      setUser(result.user);
    }
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
};
  const fetchCompanies = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (search) params.set("search", search);
      if (country) params.set("country", country);
      if (category) params.set("category", category);
      if (categoryFromUrl) params.set("category", categoryFromUrl);

      const response = await fetch(`/api/companies?${params.toString()}`);
      const result = await response.json();

      console.log("API Result:", result);

if (result.success) {
  setCompanies(result.data || []);
}
    } catch (error) {
      console.error("Failed to fetch companies:", error);
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  fetchUser();
}, []);
  useEffect(() => {
  const timeout = setTimeout(() => {
    fetchCompanies();
  }, 300);

  return () => clearTimeout(timeout);
}, [search, country, category]);

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "France",
    
  ];
  const categories = [
  "AI Research",
  "AI Platforms",
  "Generative AI",
];

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#09090b]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
              <Building2 size={20} />
            </div>

            <div>
              <h1 className="text-xl font-bold">AI ORBIT</h1>
              <p className="text-xs text-zinc-500">Companies Directory</p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
  <Link href="/" className="transition hover:text-white">
    Home
  </Link>

  <Link href="/companies" className="text-white">
    Companies
  </Link>

  <Link href="/categories" className="transition hover:text-white">
    Categories
  </Link>
</nav>

          <div className="flex items-center gap-3">
  {user && (
    <div className="hidden items-center gap-2 text-sm text-zinc-400 md:flex">
      <User size={18} />
      <span>{user.email}</span>
    </div>
  )}

  <button
    onClick={handleLogout}
    className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
  >
    Logout
  </button>
</div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-zinc-500">
            DISCOVER THE AI ECOSYSTEM
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Explore the companies shaping the future of AI.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Discover innovative artificial intelligence companies, their
            locations, products and contributions to the global AI ecosystem.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#121214] py-4 pl-12 pr-4 text-white outline-none transition focus:border-white/30"
            />
          </div>

          {/* Country Filter */}
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#121214] px-5 py-4 text-zinc-300 outline-none"
          >
            <option value="">All Countries</option>

            {countries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="rounded-xl border border-white/10 bg-[#121214] px-5 py-4 text-zinc-300 outline-none"
>
  <option value="">All Categories</option>

  {categories.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ))}
</select>
        </div>
      </section>

      {/* Companies */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Companies{" "}
            <span className="text-zinc-500">
              ({companies.length})
            </span>
          </h3>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-zinc-500" size={32} />
          </div>
        ) : companies.length === 0 ? (
          <div className="rounded-2xl border border-white/10 py-20 text-center">
            <Building2
              className="mx-auto mb-4 text-zinc-600"
              size={40}
            />

            <h3 className="text-lg font-medium">No companies found</h3>

            <p className="mt-2 text-zinc-500">
              Try searching for something else.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {companies.map((company) => (
              <Link
  key={company.id}
  href={`/companies/${company.id}`}
  className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#111113] p-5 transition hover:border-white/25 hover:bg-[#161618] md:flex-row md:items-center"
>
                {/* Logo */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white">
                  {company.image ? (
                    <img
                      src={company.image}
                      alt={company.name}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <Building2 className="text-black" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {company.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    {company.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                    <MapPin size={15} />

                    <span>
                      {company.city}, {company.country}
                    </span>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center gap-2 text-sm text-zinc-400">
  View Details
  <ExternalLink size={16} />
</div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}