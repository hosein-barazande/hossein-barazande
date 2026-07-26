import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import ProjectBackground from "@/components/projects/ProjectBackground";

export default function NotFound() {
    return (
        <>
            <ProjectBackground />

            <section className="relative flex min-h-screen items-center">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="bg-gradient-to-b from-white to-slate-500 bg-clip-text text-8xl font-black text-transparent md:text-[11rem]">
                            404
                        </h1>
                        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">Error</p>

                        <Heading level={1} className="mt-8 text-4xl md:text-6xl">
                            Page Not Found
                        </Heading>
                        <Text className="mx-auto mt-8 max-w-2xl text-lg">
                            The page you are looking for does not exist or may have been moved.
                        </Text>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Link href="/">
                                <Button>Back Home</Button>
                            </Link>

                            <Link href="/#projects">
                                <Button variant="secondary">View Projects</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
