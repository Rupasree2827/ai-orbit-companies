import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search") || "";
    const country = searchParams.get("country") || "";
    const category = searchParams.get("category") || "";

    const companies = await prisma.company.findMany({
      where: {
        AND: [
          search
            ? {
                OR: [
                  {
                    name: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    description: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {},
          country
            ? {
                country: {
                  equals: country,
                  mode: "insensitive",
                },
              }
            : {},
            category
  ? {
      category: {
        equals: category,
        mode: "insensitive",
      },
    }
  : {},
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      count: companies.length,
      data: companies,
    });
  } catch (error) {
    console.error("Error fetching companies:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch companies",
      },
      { status: 500 }
    );
  }
}