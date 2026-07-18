import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

export default function Skills() {
    return (
        <Section id="skills">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <Heading level={2}>Skills & Technologies</Heading>

                    <Text variant="lead" className="mt-6">
                        Modern technologies and tools I use to build fast, scalable and reliable digital products.
                    </Text>
                </div>
                <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <Card className="p-8">
                        <Heading level={3}>Frontend</Heading>

                        <Text className="mt-4">
                            React • Next.js • TypeScript • JavaScript • HTML • CSS • Tailwind CSS
                        </Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Backend</Heading>

                        <Text className="mt-4">Node.js • Express • REST API • PHP • WordPress</Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Technical SEO</Heading>

                        <Text className="mt-4">
                            Core Web Vitals • Schema • Indexing • Crawl Budget • On-Page SEO • Performance
                        </Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Tools</Heading>

                        <Text className="mt-4">Git • GitHub • VS Code • Figma • Chrome DevTools • Postman</Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Deployment</Heading>

                        <Text className="mt-4">Vercel • Cloudflare • cPanel • Linux • DNS Management</Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Currently Learning</Heading>

                        <Text className="mt-4">AI Integration • Advanced Next.js • Cloud Architecture</Text>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
