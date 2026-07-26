import Image from "next/image";

import Heading from "@/components/shared/typography/Heading";

import {ProjectGalleryImage} from "@/types/project-detail";

interface ProjectGalleryProps {
    images: ProjectGalleryImage[];
}

export default function ProjectGallery({images}: ProjectGalleryProps) {
    if (images.length === 0) return null;

    const [hero, ...gallery] = images;

    return (
        <section className="space-y-8">
            <Heading level={2}>Project Preview</Heading>

            {/* Hero Image */}

            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_20px_80px_rgba(0,0,0,.35)]">
                <Image
                    src={hero.src}
                    alt={hero.alt}
                    width={1600}
                    height={900}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
            </div>

            {/* Gallery */}

            {gallery.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2">
                    {gallery.map((image) => (
                        <div
                            key={image.src}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_20px_70px_rgba(0,0,0,.3)]"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={900}
                                height={600}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
