import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/ui/Badge";
// import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

interface ProjectCardProps {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    year?: string;
    categories: string[];
}

export default function ProjectCard({
    slug,
    title,
    description,
    image,
    technologies,
    year,
    categories,
}: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className="block h-full w-full">
            <Card className="flex h-full w-full flex-col p-6">
                {/* Project Image */}

                <div className="relative mb-6 h-56 overflow-hidden rounded-2xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Title & Year */}

                <div className="flex items-start justify-between gap-4">
                    <Heading level={3} className="leading-tight">
                        {title}
                    </Heading>

                    {year && <span className="shrink-0 text-sm font-medium text-slate-400">{year}</span>}
                </div>

                {/* Category */}

                {categories && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Badge key={category}>{category}</Badge>
                        ))}
                    </div>
                )}

                {/* Description */}

                <Text className="mt-5 flex-grow">{description}</Text>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                </div>
            </Card>
        </Link>
    );
}
