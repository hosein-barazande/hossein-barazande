import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProjectHeader() {
    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <Container>
                <nav className="mt-5 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 px-6 backdrop-blur-2xl">
                    {/* Logo */}

                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-bold text-white shadow-lg shadow-cyan-500/20">
                            HB
                        </div>

                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold tracking-wide text-white">Hossein Barazande</p>

                            <p className="text-xs text-slate-400">Full-Stack Developer</p>
                        </div>
                    </Link>

                    {/* Back */}

                    <Link href="/#projects" className="text-sm font-medium text-slate-200 transition hover:text-white">
                        ← Back to Projects
                    </Link>
                </nav>
            </Container>
        </header>
    );
}
