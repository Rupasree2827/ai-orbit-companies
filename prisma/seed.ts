import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const companies = [
  {
    name: "OpenAI",
    category: "AI Research",
    location: "San Francisco",
    city: "San Francisco",
    state: "California",
    country: "United States",
    description:
      "An AI research and deployment company building advanced artificial intelligence systems.",
    image: "https://openai.com/favicon.ico",
    website: "https://openai.com",
  },
  {
    name: "Anthropic",
    category: "AI Research",
    location: "San Francisco",
    city: "San Francisco",
    state: "California",
    country: "United States",
    description:
      "An artificial intelligence company focused on developing reliable and safe AI systems.",
    image: "https://www.anthropic.com/favicon.ico",
    website: "https://anthropic.com",
  },
  {
    name: "Hugging Face",
    category: "AI Platforms",
    location: "New York",
    city: "New York",
    state: "New York",
    country: "United States",
    description:
      "A platform and community for building, training and deploying machine learning models.",
    image:
      "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    website: "https://huggingface.co",
  },
  {
    name: "Mistral AI",
    category: "AI Research",
    location: "Paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    description:
      "An AI company building advanced and efficient foundation models.",
    image: "https://mistral.ai/favicon.ico",
    website: "https://mistral.ai",
  },
  {
    name: "Cohere",
    category: "AI Platforms",
    location: "Toronto",
    city: "Toronto",
    state: "Ontario",
    country: "Canada",
    description:
      "An enterprise-focused artificial intelligence company building large language models.",
    image: "https://cohere.com/favicon.ico",
    website: "https://cohere.com",
  },
  {
    name: "Perplexity AI",
    category: "AI Platforms",
    location: "San Francisco",
    city: "San Francisco",
    state: "California",
    country: "United States",
    description:
      "An AI-powered search and answer platform that helps users discover information.",
    image: null,
    website: "https://perplexity.ai",
  },
  {
    name: "Stability AI",
    category: "Generative AI",
    location: "London",
    city: "London",
    state: "England",
    country: "United Kingdom",
    description:
      "An artificial intelligence company focused on generative AI and creative tools.",
    image: "https://stability.ai/favicon.ico",
    website: "https://stability.ai",
  },
  {
    name: "Runway",
    category: "Generative AI",
    location: "New York",
    city: "New York",
    state: "New York",
    country: "United States",
    description:
      "A research company developing generative AI tools for video and creative content.",
    image: null,
    website: "https://runwayml.com",
  },
];

async function main() {
  console.log("Deleting old companies...");

  await prisma.company.deleteMany();

  console.log("Adding fresh companies...");

  await prisma.company.createMany({
    data: companies,
  });

  console.log("Companies added successfully!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });