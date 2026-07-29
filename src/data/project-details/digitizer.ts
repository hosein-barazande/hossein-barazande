import { ProjectDetail } from "@/types/project-detail";

export const digitizer: ProjectDetail = {
  slug: "digitizer",

  status: "In Development",

  overview: "Corporate website for Digitizer digital agency.",

  problem: "Develop a scalable website with strong SEO foundations.",

  solution:
    "Implemented modern frontend architecture with technical SEO best practices.",

  technologies: [
    "Next.js",
    "TypeScript",
    "SEO",
    "Tailwind CSS",
  ],

  results: [
    {
      title: "SEO",
      description: "Optimized for search engines.",
    },
  ],

  gallery: [
    {
      src: "/images/projects/digitizer/cover.jpg",
      alt: "Digitizer Website main page",
    },
    {
      src: "/images/projects/digitizer/about_us.jpg",
      alt: "About Us section on the home page",
    },
    {
      src: "/images/projects/digitizer/contact_us.jpg",
      alt: "Digitizer Website Contact Us Page",
    },
    {
      src: "/images/projects/digitizer/our_services.jpg",
      alt: "Part of our services on the Digitizer website",
    },
    {
      src: "/images/projects/digitizer/Website_design_portfolio.jpg",
      alt: "Some of the websites designed by our company",
    },
    {
      src: "/images/projects/digitizer/seo_portfolio.jpg",
      alt: "Part of the websites SEOed by our company",
    },
  ],

  links: {
    demo: "https://digitizerco.net",
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