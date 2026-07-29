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
                            React • Next.js • TypeScript • JavaScript (ES6+) • HTML5 • CSS3 • Tailwind CSS
                        </Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Backend</Heading>

                        <Text className="mt-4">Node.js • Express • REST API • PHP • MySQL</Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>CMS & Platforms</Heading>

                        <Text className="mt-4">WordPress • WooCommerce • Elementor • Tutor LMS</Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Technical SEO</Heading>

                        <Text className="mt-4">
                            Technical SEO • On-Page SEO • Core Web Vitals • Schema Markup • Google Search Console •
                            Google Analytics • Screaming Frog • Keyword Research
                        </Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Tools</Heading>

                        <Text className="mt-4">Git • GitHub • VS Code • Cloudflare • Chrome DevTools • Postman</Text>
                    </Card>

                    <Card className="p-8">
                        <Heading level={3}>Deployment</Heading>

                        <Text className="mt-4">
                            Vercel • Cloudflare Pages • Cloudflare DNS • cPanel • Linux • DNS Management
                        </Text>
                    </Card>

                    <Card className="p-8 xl:col-start-2">
                        <Heading level={3}>Currently Learning</Heading>

                        <Text className="mt-4">
                            AI Integration • LLM Applications • Advanced Next.js • Cloudflare Workers
                        </Text>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
