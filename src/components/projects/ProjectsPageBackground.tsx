export default function ProjectsPageBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base Background */}

            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

            {/* Soft radial light */}

            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at 50% 20%, rgba(34,211,238,.08), transparent 45%)",
                }}
            />

            {/* Diagonal Lines */}

            <div
                className="absolute inset-0 opacity-[0.7]"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            -35deg,
                            rgba(255,255,255,.08) 0px,
                            rgba(255,255,255,.08) 1px,
                            transparent 1px,
                            transparent 46px
                        )
                    `,
                }}
            />

            {/* Secondary Diagonal */}

            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            35deg,
                            rgba(255,255,255,.08) 0px,
                            rgba(255,255,255,.08) 1px,
                            transparent 1px,
                            transparent 120px
                        )
                    `,
                }}
            />

            {/* Glow Top */}

            <div className="absolute left-1/2 top-[-120px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[170px]" />

            {/* Glow Right */}

            <div className="absolute right-[-180px] top-[420px] h-[680px] w-[680px] rounded-full bg-violet-500/12 blur-[180px]" />

            {/* Glow Left */}

            <div className="absolute left-[-180px] top-[1300px] h-[720px] w-[720px] rounded-full bg-indigo-500/12 blur-[190px]" />

            {/* Glow Bottom */}

            <div className="absolute right-1/4 top-[2400px] h-[700px] w-[700px] rounded-full bg-cyan-400/12 blur-[180px]" />
        </div>
    );
}
