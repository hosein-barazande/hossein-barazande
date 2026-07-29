import {notFound} from "next/navigation";

import ProjectLayout from "@/components/projects/ProjectLayout";

import {projects} from "@/data/projects/index";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({params}: ProjectPageProps) {
    const {slug} = await params;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectLayout project={project} />;
}
