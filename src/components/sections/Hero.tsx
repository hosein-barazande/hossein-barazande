import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import HeroBackground from "@/components/sections/HeroBackground";
import HeroCard from "@/components/sections/HeroCard";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import {profile} from "@/data/profile";

export default function Hero() {
    return (
        <Section id="hero" className="relative overflow-hidden pt-24">
            <HeroBackground />
            <Container>
                <div className="grid min-h-[calc(100vh-96px)] items-center gap-10 lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <Badge className="mb-5">{profile.availability}</Badge>

                        <Heading level={1} className="max-w-3xl">
                            {profile.tagline}
                        </Heading>

                        <Text variant="lead" className="mt-5 max-w-2xl text-slate-300">
                            Hi, I&apos;m <span className="font-semibold text-white">{profile.name}</span>.{" "}
                            {profile.shortBio}
                        </Text>

                        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                            <Button>View Projects</Button>

                            <Button variant="secondary">Contact Me</Button>
                        </div>
                    </div>

                    <HeroCard />
                </div>
            </Container>
        </Section>
    );
}
