import Card from "@/components/ui/Card";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import {ProjectMetric} from "@/types/project";

interface ProjectMetricsProps {
    metrics: ProjectMetric[];
}

export default function ProjectMetrics({metrics}: ProjectMetricsProps) {
    if (metrics.length === 0) return null;

    return (
        <section className="space-y-8">
            <Heading level={2}>Project Metrics</Heading>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                    <Card
                        key={metric.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
                    >
                        <div className="text-4xl font-bold text-white">{metric.value}</div>

                        <Text className="mt-3">{metric.label}</Text>
                    </Card>
                ))}
            </div>
        </section>
    );
}
