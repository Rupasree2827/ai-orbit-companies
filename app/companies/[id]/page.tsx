import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ExternalLink, ArrowLeft, Building2 } from "lucide-react";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CompanyDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const company = await prisma.company.findUnique({
    where: {
      id,
    },
  });

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/companies"
            className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Companies
          </Link>

          <Link href="/companies" className="font-bold tracking-wide">
            AI ORBIT
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-white/10 bg-[#111113] p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white">
              {company.image ? (
                <img
                  src={company.image}
                  alt={company.name}
                  className="h-full w-full object-contain p-3"
                />
              ) : (
                <Building2 className="text-black" size={40} />
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold md:text-6xl">
                {company.name}
              </h1>

              {company.description && (
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
                  {company.description}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                {(company.city || company.country) && (
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-zinc-400">
                    <MapPin size={18} />

                    <span>
                      {[company.city, company.state, company.country]
                        .filter(Boolean)
                        .join(", ")}
                    </span>
                  </div>
                )}

                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
                  >
                    Visit Website
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}