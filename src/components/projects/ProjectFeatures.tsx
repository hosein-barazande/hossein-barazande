import Card from "@/components/ui/Card";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

interface ProjectFeaturesProps {
    features: string[];
}

export default function ProjectFeatures({features}: ProjectFeaturesProps) {
    if (features.length === 0) return null;

    return (
        <section className="space-y-8">
            <Heading level={2}>Key Features</Heading>

            <div className="grid gap-5 md:grid-cols-2">
                {features.map((feature) => (
                    <Card
                        key={feature}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-cyan-400/30"
                    >
                        <Text>{feature}</Text>
                    </Card>
                ))}
            </div>
        </section>
    );
}
