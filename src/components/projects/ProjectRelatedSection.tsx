import Heading from "@/components/shared/typography/Heading";

import ProjectGrid from "./ProjectGrid";

import {Project} from "@/types/project";

interface ProjectRelatedSectionProps {
    currentSlug: string;
    projects: Project[];
}

export default function ProjectRelatedSection({currentSlug, projects}: ProjectRelatedSectionProps) {
    const relatedProjects = projects.filter((project) => project.slug !== currentSlug).slice(0, 3);

    if (relatedProjects.length === 0) {
        return null;
    }

    return (
        <section className="pt-24">
            <Heading level={2} className="mb-12 text-center">
                Related Projects
            </Heading>

            <ProjectGrid projects={relatedProjects} />
        </section>
    );
}
