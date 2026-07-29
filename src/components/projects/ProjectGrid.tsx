import ProjectCard from "@/components/sections/ProjectCard";
import {Project} from "@/types/project";

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({projects}: ProjectGridProps) {
    return (
        <div className="mt-20 flex flex-wrap justify-center gap-6">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="
                    w-full
                    sm:basis-[calc(50%-16px)]
                    lg:basis-[calc(33.333%-22px)]
                    shrink-0
                "
                >
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
    );
}
