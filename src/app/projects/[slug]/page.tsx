import {notFound} from "next/navigation";

import ProjectLayout from "@/components/projects/ProjectLayout";

import {projectDetails} from "@/data/project-details";
import {projects} from "@/data/projects";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({params}: ProjectPageProps) {
    const {slug} = await params;

    const project = projects.find((item) => item.slug === slug);

    const detail = projectDetails.find((item) => item.slug === slug);

    if (!project || !detail) {
        notFound();
    }

    return <ProjectLayout project={project} detail={detail} />;
}
