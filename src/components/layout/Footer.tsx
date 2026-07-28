import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa6";

import Container from "@/components/ui/Container";
import Text from "@/components/shared/typography/Text";

import {profile} from "@/data/profile";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
            {/* Background Glow */}

            {/* Background Layers */}

            <div className="absolute inset-0 -z-10">
                <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

                <div className="absolute right-[-120px] top-[80px] h-[380px] w-[380px] rounded-full bg-indigo-500/10 blur-[150px]" />

                <div className="absolute bottom-[-180px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
            </div>

            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-950 via-slate-950/95 to-black" />
            <Container>
                <div className="relative flex flex-col items-center py-8 text-center">
                    {/* Brand */}

                    <h3 className="text-2xl font-semibold text-white">{profile.name}</h3>

                    <p className="mt-4 text-sm font-medium tracking-wide text-slate-300">
                        Senior Full Stack Developer | Senior SEO Specialist
                    </p>

                    <Text className="mt-6 max-w-xl">
                        Building fast, scalable and SEO-driven digital products with modern web technologies.
                    </Text>

                    {/* Social */}

                    <div className="mt-8 flex items-center gap-5">
                        <a
                            href={profile.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-white/20 hover:text-white"
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/hosein-barazande-873640bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-white/20 hover:text-white"
                        >
                            <FaLinkedin size={18} />
                        </a>

                        <a
                            href="https://t.me/@hoseinBarazande"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-white/20 hover:text-white"
                        >
                            <FaTelegram size={18} />
                        </a>
                    </div>

                    {/* Availability */}

                    <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                            <span className="text-sm font-medium text-slate-200">
                                Available for Remote Opportunities
                            </span>
                        </div>
                    </div>

                    {/* Copyright */}

                    <div className="mt-12 border-t border-white/10 pt-6">
                        <Text variant="small">
                            © {year} {profile.name}. All rights reserved.
                        </Text>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
