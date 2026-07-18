import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import ContactCard from "@/components/sections/ContactCard";

export default function Contact() {
    return (
        <Section id="contact">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <Heading level={2}>Let&apos;s Work Together</Heading>

                    <Text variant="lead" className="mt-6">
                        I&apos;m currently available... for remote opportunities, freelance projects and relocation.
                    </Text>
                </div>

                <div className="mt-20">
                    <ContactCard />
                </div>
            </Container>
        </Section>
    );
}
