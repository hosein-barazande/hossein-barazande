export interface Project {
    id: number;
    slug: string;
  
    title: string;
    description: string;
  
    image: string;
    imageAlt: string;
  
    technologies: string[];
  
 
  
    year: string;
    category: string;
  
    featured: boolean;
  }

export const projects: Project[] = [
    {
        
        id: 1,
        slug: "personal-portfolio",
        title: "Personal Portfolio",
        description:
            "A modern portfolio built with Next.js, React, TypeScript and Tailwind CSS, focused on performance, accessibility and SEO.",


            image: "/images/projects/portfolio/cover.jpg",

            imageAlt: "Personal Portfolio Website built with Next.js",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
        ],

        year: "2026",

        category: "Portfolio",

        featured: true,
    },


    {
        id: 2,
        slug: "digitizer",
        title: "Digitizer",

        description:
            "Company website focused on web development, technical SEO and digital marketing.",

        image: "/images/projects/digitizer/cover.jpg",

        imageAlt: "Own Compony Website built with php",


        technologies: [
            "HTML",
            "CSS",
            "PHP",
            "SEO",
            "GEO",
            "AEO",
            "Technical SEO",
        ],


        year: "2025",

        category: "Company Website",

        featured: true,
    },

    {
        id: 3,
        slug: "fuchsia-gallery",

        title: "Fuchsia Gallery",

        description:
            "Fashion e-commerce website with performance optimization and SEO.",

        image: "/images/projects/fuchsia-gallery/cover.jpg",
        imageAlt: "Personal Portfolio Website built with Next.js",


        technologies: [
            "WooCommerce",
            "WordPress",
            "HTML",
            "CSS",
            "PHP",
            "SEO",
            "GEO",
            "AEO",
            "Technical SEO",
        ],

        year: "2025",

        category: "E-commerce",

        featured: true,
    },

    {
        id: 4,
        slug: "seo-calculator",
        title: "SEO Calculator",
        description:
            "Interactive SEO pricing calculator with modern UI and technical SEO best practices.",

        image: "/images/projects/seo-calculator/cover.jpg",
        imageAlt: "To calculate SEO prices online",


        technologies: [
            "JavaScript",
            "SEO",
            "UI/UX",
        ],

        year: "2025",

        category: "SEO Tool",

        featured: true,
    },
];