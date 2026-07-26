import Image from "next/image";

import Container from "@/components/ui/Container";

interface ProjectCoverProps {
    image: string;
    alt: string;
}

export default function ProjectCover({image, alt}: ProjectCoverProps) {
    return (
        <section className="pb-10 lg:pb-14">
            <Container>
                <div
                    className="mx-auto max-w-6xl overflow-hidden rounded-3xl
border border-white/10
bg-white/[0.03]
backdrop-blur-xl
shadow-[0_0_60px_rgba(0,255,255,.06)] bg-white/[0.02] shadow-2xl"
                >
                    <Image
                        src={image}
                        alt={alt}
                        width={1600}
                        height={900}
                        priority
                        className="h-auto w-full object-cover"
                    />
                </div>
            </Container>
        </section>
    );
}
