import { Project } from "@/types/project";

export const seoCalculator: Project = {
  slug: "seo-calculator",

  id: 4,
  title: "SEO Calculator",
  description:
      "Interactive SEO pricing calculator with modern UI and technical SEO best practices.",

  image: "/images/projects/seo-calculator/cover.jpg",
  imageAlt: "To calculate SEO prices online",

  year: "2025",

  category: "SEO Tool",

  categories:[
    "Web Tools",
  ],

  featured: true,
  
  status: "Completed",

  overview:
    "Interactive SEO cost calculator for estimating monthly SEO services.",

  problem:
    "Help users calculate SEO pricing quickly and transparently.",

  solution:
    "Built an interactive calculator with configurable SEO parameters.",

  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "UI/UX",
    "SEO",
  ],

  results: [
    {
      title: "Interactive Tool",
      description: "Provides instant SEO pricing estimates.",
    },
  ],

  gallery: [
    {
      src: "/images/projects/seo-calculator/cover.jpg",
      alt: "Online website SEO price calculator",
    },
    {
      src: "/images/projects/seo-calculator/seo_price.jpg",
      alt: "Display the result of website SEO price with online calculator in an approximate range",
    },
    {
      src: "/images/projects/seo-calculator/cantant_price_online.jpg",
      alt: "Online calculator for generating text content based on word count and content type",
    },
  ],


  links: {
    demo: "https://digitizerco.net/seo_calculator",
  },

  features: [
    "Responsive Design",
    "Dark Theme",
    "SEO-first Architecture",
    "Accessibility",
    "Reusable Design System",
    "Performance Optimized",
  ],
  
  responsibilities: [
    "UI/UX Design",
    "Frontend Development",
    "System Architecture",
    "Technical SEO",
    "Performance Optimization",
  ],
  
  metrics: [
    {
      label: "Performance",
      value: "98",
    },
    {
      label: "Accessibility",
      value: "100",
    },
    {
      label: "Best Practices",
      value: "100",
    },
    {
      label: "SEO",
      value: "100",
    },
  ],
};