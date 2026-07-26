import { ProjectDetail } from "@/types/project-detail";

export const personalPortfolio: ProjectDetail = {
  slug: "personal-portfolio",

  overview:
    "A premium personal portfolio built with Next.js, React, TypeScript and Tailwind CSS, focused on performance, accessibility, scalability and technical SEO.",

  problem:
    "Create a world-class developer portfolio that showcases technical expertise while maintaining excellent performance, accessibility and modern design.",

  solution:
    "Built using a reusable design system, clean architecture, responsive layouts and SEO-first development practices.",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],

  results: [
    {
      title: "Modern Architecture",
      description: "Built with scalable and reusable components.",
    },
    {
      title: "Performance",
      description: "Optimized for Core Web Vitals and fast loading.",
    },
  ],

  gallery: [
    {
      src: "/images/projects/portfolio/cover.jpg",
      alt: "Personal Portfolio",
    },
    {
      src: "/images/projects/portfolio/about-me.jpg",
      alt: "A summary of my lunches and work history",
    },
    {
      src: "/images/projects/portfolio/skills.jpg",
      alt: "Skills and technologies I know",
    },
    {
      src: "/images/projects/portfolio/projects.jpg",
      alt: "Examples of projects I worked on",
    },
  ],


  links: {
    github: "https://github.com/hosein-barazande/hossein-barazande",
    demo: "https://hosseinbarazande.dev",
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