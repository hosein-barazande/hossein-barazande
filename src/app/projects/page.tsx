import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectsPageBackground from "@/components/projects/ProjectsPageBackground";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";

import {projects} from "@/data/projects";

export default function ProjectsPage() {
    return (
        <>
            <ProjectHeader />
            <ProjectsPageBackground />

            <Section className="pt-36">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <Heading level={1}>Projects</Heading>

                        <Text variant="lead" className="mt-6">
                            A collection of my work in Full-Stack Development, Senior SEO Specialist, WordPress and
                            modern web technologies.
                        </Text>
                    </div>

                    <div className="mt-20">
                        <ProjectsExplorer projects={projects} />
                    </div>
                </Container>
            </Section>
        </>
    );
}
