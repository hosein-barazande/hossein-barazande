import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

export default function About() {
    return (
        <Section id="about">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <Heading level={2}>About Me</Heading>

                    <Text variant="lead" className="mt-6">
                        I build modern web applications with a strong focus on performance, scalability and technical
                        SEO.
                    </Text>
                </div>

                <div className="mt-20 grid gap-6 md:grid-cols-3">
                    <Card className="p-8">
                        <Heading level={3}>Full-Stack Development</Heading>

                        <Text className="mt-4">
                            Designing and building scalable, high-performance web applications with React, Next.js,
                            TypeScript, Node.js and modern software architecture.
                        </Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Senior SEO Specialist</Heading>

                        <Text className="mt-4">
                            Driving organic growth through technical SEO, on-page optimization, Core Web Vitals,
                            structured data and search performance strategies.
                        </Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Performance & UX</Heading>

                        <Text className="mt-4">
                            Creating fast, accessible and user-centered experiences with a strong focus on performance,
                            usability and clean interface design.
                        </Text>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
