import Card from "@/components/ui/Card";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

interface ProjectSectionProps {
    title: string;
    children: React.ReactNode;
}

export default function ProjectSection({title, children}: ProjectSectionProps) {
    return (
        <Card className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <Heading level={2} className="mb-6">
                {title}
            </Heading>

            <Text>{children}</Text>
        </Card>
    );
}
