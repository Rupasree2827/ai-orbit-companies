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
    {
    name: "Google DeepMind",
    category: "AI Research",
    location: "London",
    city: "London",
    state: "England",
    country: "United Kingdom",
    description:
      "An AI research company developing advanced artificial intelligence systems and technologies.",
    image: null,
    website: "https://deepmind.google",
  },
  {
    name: "xAI",
    category: "AI Research",
    location: "San Francisco",
    city: "San Francisco",
    state: "California",
    country: "United States",
    description:
      "An artificial intelligence company focused on developing advanced AI systems.",
    image: null,
    website: "https://x.ai",
  },
  {
    name: "ElevenLabs",
    category: "Generative AI",
    location: "New York",
    city: "New York",
    state: "New York",
    country: "United States",
    description:
      "An AI company specializing in realistic voice generation and audio technology.",
    image: null,
    website: "https://elevenlabs.io",
  },
  {
    name: "Midjourney",
    category: "Generative AI",
    location: "San Francisco",
    city: "San Francisco",
    state: "California",
    country: "United States",
    description:
      "An independent research lab developing AI-powered image generation tools.",
    image: null,
    website: "https://www.midjourney.com",
  },
  {
    name: "Synthesia",
    category: "Generative AI",
    location: "London",
    city: "London",
    state: "England",
    country: "United Kingdom",
    description:
      "An AI video generation platform that creates videos using digital avatars.",
    image: null,
    website: "https://www.synthesia.io",
  },
  {
    name: "Character.AI",
    category: "AI Platforms",
    location: "Menlo Park",
    city: "Menlo Park",
    state: "California",
    country: "United States",
    description:
      "A platform that allows users to interact with AI-powered conversational characters.",
    image: null,
    website: "https://character.ai",
  },
  {
    name: "Scale AI",
    category: "AI Platforms",
    location: "San Francisco",
    city: "San Francisco",
    state: "California",
    country: "United States",
    description:
      "An AI data platform providing data infrastructure and evaluation solutions.",
    image: null,
    website: "https://scale.com",
  },
  {
    name: "Jasper",
    category: "Generative AI",
    location: "Austin",
    city: "Austin",
    state: "Texas",
    country: "United States",
    description:
      "An AI platform focused on helping teams create content and marketing materials.",
    image: null,
    website: "https://www.jasper.ai",
  },
  {
    name: "Pika",
    category: "Generative AI",
    location: "Palo Alto",
    city: "Palo Alto",
    state: "California",
    country: "United States",
    description:
      "A company developing AI tools for creating and editing videos.",
    image: null,
    website: "https://pika.art",
  },
  {
    name: "Suno",
    category: "Generative AI",
    location: "Cambridge",
    city: "Cambridge",
    state: "Massachusetts",
    country: "United States",
    description:
      "An AI company developing tools for generating music from text prompts.",
    image: null,
    website: "https://suno.com",
  },
  {
    name: "DataRobot",
    category: "AI Platforms",
    location: "Boston",
    city: "Boston",
    state: "Massachusetts",
    country: "United States",
    description:
      "An enterprise AI platform focused on building and deploying machine learning solutions.",
    image: null,
    website: "https://www.datarobot.com",
  },
  {
    name: "NVIDIA AI",
    category: "AI Platforms",
    location: "Santa Clara",
    city: "Santa Clara",
    state: "California",
    country: "United States",
    description:
      "A technology organization building computing platforms and infrastructure for artificial intelligence.",
    image: null,
    website: "https://www.nvidia.com",
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