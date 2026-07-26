import { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const SITE_URL = "https://hossein-barazande.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const routes: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
            images: projects.map(
                (project) => `${SITE_URL}${project.image}`
            ),
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${SITE_URL}/projects/${project.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        images: [`${SITE_URL}${project.image}`],
    }));

    return [...routes, ...projectRoutes];
}