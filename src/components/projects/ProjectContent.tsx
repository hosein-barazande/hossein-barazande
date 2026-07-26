import Container from "@/components/ui/Container";

interface ProjectContentProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
}

export default function ProjectContent({children, sidebar}: ProjectContentProps) {
    return (
        <section className="relative py-24">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

            <Container>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
                    <main className="space-y-12">{children}</main>

                    <aside className="relative hidden lg:block">
                        <div className="sticky top-6">{sidebar}</div>
                    </aside>
                </div>
            </Container>
        </section>
    );
}
