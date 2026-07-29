import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import {projects} from "@/data/projects/index";

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
                        A selection of projects that showcase my experience in Full-Stack Development, Senior SEO
                        Specialist and modern web technologies.
                    </Text>
                </div>
                <ProjectGrid projects={projects.filter((project) => project.featured)} />
                <div className="mt-14 flex justify-center">
                    <a
                        href="/projects"
                        className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
                    >
                        View All Projects →
                    </a>
                </div>
            </Container>
        </Section>
    );
}
