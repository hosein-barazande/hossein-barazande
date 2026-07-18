import Card from "@/components/ui/Card";

export default function HeroCard() {
    return (
        <Card className="p-8">
            <div className="space-y-4">
                <div>
                    <p className="text-sm text-slate-400">Current Role</p>

                    <h3 className="mt-1 text-xl font-semibold">Senior Full-Stack Developer</h3>
                </div>

                <div>
                    <p className="text-sm text-slate-400">Stack</p>

                    <p className="mt-2">React • Next.js • TypeScript • Node.js</p>
                </div>

                <div>
                    <p className="text-sm text-slate-400">Focus</p>
                    <div>
                        <p className="mb-3 text-sm text-slate-400">Core Technologies</p>

                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "TypeScript", "Node.js", "WordPress", "SEO"].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="mt-2">Performance • SEO • UX</p>
                    <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                        <p className="text-sm">Available for Remote & Relocation</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
