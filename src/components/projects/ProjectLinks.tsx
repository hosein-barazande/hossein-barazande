import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

interface ProjectLinksProps {
    github?: string;
    demo?: string;
}

export default function ProjectLinks({github, demo}: ProjectLinksProps) {
    if (!github && !demo) return null;

    return (
        <section className="py-16">
            <Container>
                <div className="flex flex-wrap gap-4">
                    {github && (
                        <Link href={github} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">View Source</Button>
                        </Link>
                    )}

                    {demo && (
                        <Link href={demo} target="_blank" rel="noopener noreferrer">
                            <Button>Live Demo</Button>
                        </Link>
                    )}
                </div>
            </Container>
        </section>
    );
}
