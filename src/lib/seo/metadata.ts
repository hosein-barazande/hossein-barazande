import { Metadata } from "next";

export const siteConfig = {
    name: "Hossein Barazande",
    title: "Hossein Barazande | Senior Full-Stack Developer",
    description:
        "Senior Full-Stack Developer and Technical SEO Expert with 11+ years of experience building high-performance web applications.",
    url: "https://hossein-barazande.vercel.app",

    ogImage: "/og-image.jpg",

    twitter: "@hoseinbarazande",
};

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),

    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    applicationName: siteConfig.name,

    keywords: [
        "Hossein Barazande",
        "Next.js",
        "React",
        "TypeScript",
        "Technical SEO",
        "Senior Full Stack Developer",
        "Node.js",
    ],

    authors: [
        {
            name: siteConfig.name,
            url: siteConfig.url,
        },
    ],

    creator: siteConfig.name,

    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",

        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },

    robots: {
        index: true,
        follow: true,
    },
};