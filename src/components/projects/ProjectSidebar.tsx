import Link from "next/link";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

interface ProjectSidebarProps {
    title: string;
    category: string;
    year: string;
    technologies: string[];
    github?: string;
    demo?: string;
}

export default function ProjectSidebar({title, category, year, technologies, github, demo}: ProjectSidebarProps) {
    return (
        <Card className="sticky top-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">
            <div className="space-y-8">
                <div>
                    <Text className="text-xs uppercase tracking-[0.25em] text-slate-500">Project</Text>

                    <Heading level={3} className="mt-3">
                        {title}
                    </Heading>
                </div>

                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <Text>Status</Text>
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <Badge>Completed</Badge>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="flex items-center justify-between">
                        <Text>Category</Text>

                        <Text>{category}</Text>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="flex items-center justify-between">
                        <Text>Year</Text>

                        <Text>{year}</Text>
                    </div>
                </div>

                <div>
                    <Text className="mb-4 text-xs uppercase tracking-[0.25em] text-slate-500">Tech Stack</Text>

                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    {demo && (
                        <Link href={demo} target="_blank">
                            <Button className="h-12 w-full rounded-xl">View Live Website</Button>
                        </Link>
                    )}

                    {github && (
                        <Link href={github} target="_blank">
                            <Button variant="secondary" className="h-12 w-full rounded-xl">
                                View Source Code
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </Card>
    );
}
