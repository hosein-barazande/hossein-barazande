export type ProjectStatus =
    | "In Development"
    | "Completed"
    | "Live";

export interface ProjectResult {
    title: string;
    description: string;
}

export interface ProjectLink {
    github?: string;
    demo?: string;
}

export interface ProjectMetric {
    label: string;
    value: string;
}

export interface ProjectGalleryImage {
    src: string;
    alt: string;
}

export interface Project {

    id: number;

    slug: string;

    title: string;

    description: string;

    image: string;

    imageAlt: string;

    year: string;

    category: string;

    categories: string[];

    featured: boolean;

    status: ProjectStatus;

    technologies: string[];

    overview: string;

    problem: string;

    solution: string;

    results: ProjectResult[];

    gallery: ProjectGalleryImage[];

    links: ProjectLink;

    features: string[];

    responsibilities: string[];

    metrics: ProjectMetric[];
}