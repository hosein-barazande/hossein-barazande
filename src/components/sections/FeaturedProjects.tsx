import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import {projects} from "@/data/projects";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import ProjectGrid from "@/components/projects/ProjectGrid";

export default function FeaturedProjects() {
    return (
        <Section id="projects">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <Heading level={2}>Featured Projects</Heading>

                    <Text variant="lead" className="mt-6">
                        A selection of projects that showcase my experience in Full-Stack Development, Technical SEO and
                        modern web technologies.
                    </Text>
                </div>
                <ProjectGrid projects={projects} />
            </Container>
        </Section>
    );
}
