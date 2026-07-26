import Card from "@/components/ui/Card";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

interface ProjectResponsibilitiesProps {
    responsibilities: string[];
}

export default function ProjectResponsibilities({responsibilities}: ProjectResponsibilitiesProps) {
    if (responsibilities.length === 0) return null;

    return (
        <section className="space-y-8">
            <Heading level={2}>Responsibilities</Heading>

            <Card className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <ul className="space-y-4">
                    {responsibilities.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />

                            <Text>{item}</Text>
                        </li>
                    ))}
                </ul>
            </Card>
        </section>
    );
}
