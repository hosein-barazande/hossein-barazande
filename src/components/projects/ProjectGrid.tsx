import ProjectCard from "@/components/sections/ProjectCard";

import {Project} from "@/data/projects";

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({projects}: ProjectGridProps) {
    return (
        <div className="mt-20 flex flex-wrap justify-center gap-8">
            {projects.map((project) => (
                <div key={project.id} className="flex w-full md:w-[calc(50%-16px)] xl:w-[calc(33.333%-22px)]">
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
    );
}
