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
                            Building scalable web applications using React, Next.js, TypeScript and modern frontend
                            architecture.
                        </Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Technical SEO</Heading>

                        <Text className="mt-4">
                            Improving visibility, Core Web Vitals and search performance through technical optimization.
                        </Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Performance & UX</Heading>

                        <Text className="mt-4">
                            Creating fast, accessible and user-focused interfaces with attention to every interaction.
                        </Text>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
