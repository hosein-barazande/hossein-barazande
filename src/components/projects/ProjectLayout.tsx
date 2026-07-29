import ProjectBackground from "@/components/projects/ProjectBackground";
import ProjectContent from "@/components/projects/ProjectContent";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectCover from "@/components/projects/ProjectCover";
import ProjectSection from "@/components/projects/ProjectSection";
import ProjectSidebar from "@/components/projects/ProjectSidebar";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectResponsibilities from "@/components/projects/ProjectResponsibilities";
import ProjectMetrics from "@/components/projects/ProjectMetrics";
import ProjectHeader from "@/components/projects/ProjectHeader";

import {Project} from "@/types/project";

interface ProjectLayoutProps {
    project: Project;
}

export default function ProjectLayout({project}: ProjectLayoutProps) {
    return (
        <>
            <ProjectHeader />
            <ProjectBackground />

            <ProjectHero
                title={project.title}
                category={project.category}
                year={project.year}
                description={project.overview}
            />
            <ProjectCover image={project.image} alt={project.imageAlt} />
            <ProjectContent
                sidebar={
                    <ProjectSidebar
                        title={project.title}
                        category={project.category}
                        year={project.year}
                        technologies={project.technologies}
                        github={project.links.github}
                        demo={project.links.demo}
                        status={project.status}
                    />
                }
            >
                <ProjectSection title="Overview">{project.overview}</ProjectSection>

                <ProjectGallery images={project.gallery} />

                <ProjectFeatures features={project.features} />

                <ProjectSection title="Problem">{project.problem}</ProjectSection>

                <ProjectSection title="Solution">{project.solution}</ProjectSection>

                <ProjectResponsibilities responsibilities={project.responsibilities} />

                <ProjectMetrics metrics={project.metrics} />
            </ProjectContent>
        </>
    );
}
