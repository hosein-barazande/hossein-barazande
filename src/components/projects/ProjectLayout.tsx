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

import {Project} from "@/data/projects";
import {ProjectDetail} from "@/types/project-detail";

interface ProjectLayoutProps {
    project: Project;
    detail: ProjectDetail;
}

export default function ProjectLayout({project, detail}: ProjectLayoutProps) {
    return (
        <>
            <ProjectBackground />

            <ProjectHero
                title={project.title}
                category={project.category}
                year={project.year}
                description={detail.overview}
            />
            <ProjectCover image={project.image} alt={project.imageAlt} />
            <ProjectContent
                sidebar={
                    <ProjectSidebar
                        title={project.title}
                        category={project.category}
                        year={project.year}
                        technologies={detail.technologies}
                        github={detail.links.github}
                        demo={detail.links.demo}
                    />
                }
            >
                <ProjectSection title="Overview">{detail.overview}</ProjectSection>

                <ProjectGallery images={detail.gallery} />

                <ProjectFeatures features={detail.features} />

                <ProjectSection title="Problem">{detail.problem}</ProjectSection>

                <ProjectSection title="Solution">{detail.solution}</ProjectSection>

                <ProjectResponsibilities responsibilities={detail.responsibilities} />

                <ProjectMetrics metrics={detail.metrics} />
            </ProjectContent>
        </>
    );
}
