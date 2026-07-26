import { siteConfig } from "./metadata";

export function personSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",

        name: "Hossein Barazande",

        url: siteConfig.url,

        jobTitle: "Senior Full-Stack Developer",

        description:
            "Senior Full-Stack Developer and Technical SEO Expert with 11+ years of experience.",

        knowsAbout: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Technical SEO",
            "Performance Optimization",
            "UI Engineering",
        ],
    };
}

export function websiteSchema() {
    return {
        "@context": "https://schema.org",

        "@type": "WebSite",

        name: siteConfig.name,

        url: siteConfig.url,
    };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",

            position: index + 1,

            name: item.name,

            item: item.url,
        })),
    };
}

export function projectSchema(project: {
    title: string;
    description: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",

        "@type": "CreativeWork",

        name: project.title,

        description: project.description,

        url: project.url,
    };
}