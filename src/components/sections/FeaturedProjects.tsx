import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import {projects} from "@/data/projects";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import ProjectCard from "@/components/sections/ProjectCard";

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

                <div className="mt-20 flex flex-wrap justify-center gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="flex w-full md:w-[calc(50%-16px)] xl:w-[calc(33.333%-22px)]">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
