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

export interface ProjectDetail {
  slug: string;

  overview: string;

  problem: string;

  solution: string;

  technologies: string[];

  results: ProjectResult[];

  gallery: ProjectGalleryImage[];

  links: ProjectLink;

  features: string[];

  responsibilities: string[];

  metrics: ProjectMetric[];
}