import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

interface ProjectHeroProps {
    title: string;
    categories: string[];
    year: string;
    description: string;
}

export default function ProjectHero({title, categories, year, description}: ProjectHeroProps) {
    return (
        <section className="relative overflow-hidden pt-28 pb-14 lg:pt-28 lg:pb-16">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

                <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[150px]" />

                <div className="absolute left-0 bottom-0 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-[150px]" />
            </div>
            <Container>
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                    <div className="mt-4 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Badge key={category}>{category}</Badge>
                        ))}
                    </div>

                    <Heading
                        level={1}
                        className="leading-[1.15] pb-2 bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent"
                    >
                        {title}
                    </Heading>

                    <Text className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">{description}</Text>

                    <div className="mt-10 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        <Text className="text-sm text-slate-400">Completed in {year}</Text>
                    </div>
                </div>
            </Container>
        </section>
    );
}
