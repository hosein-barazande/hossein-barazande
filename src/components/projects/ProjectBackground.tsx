export default function ProjectBackground() {
    return (
        <>
            {/* Base Background */}

            <div className="fixed inset-0 -z-50 bg-[#050816]" />

            {/* Aurora Lights */}

            <div className="fixed inset-0 -z-40 overflow-hidden">
                <div className="absolute left-[-220px] top-[-180px] h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[170px]" />

                <div className="absolute right-[-260px] top-[180px] h-[620px] w-[620px] rounded-full bg-indigo-500/15 blur-[180px]" />

                <div className="absolute bottom-[-260px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[190px]" />

                <div className="absolute left-[20%] top-[45%] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[160px]" />
            </div>

            {/* Radial Overlay */}

            <div
                className="
                    fixed inset-0 -z-30
                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,.06),transparent_55%)]
                "
            />

            {/* Grid */}

            <div
                className="
                    fixed inset-0 -z-20
                    bg-[linear-gradient(to_right,rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.035)_1px,transparent_1px)]
                    bg-[size:64px_64px]
                    [mask-image:radial-gradient(circle_at_center,black,transparent_95%)]
                "
            />

            {/* Vignette */}

            <div
                className="
                    fixed inset-0 -z-10
                    bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.55))]
                "
            />

            {/* Top Fade */}

            <div
                className="
                    fixed top-0 left-0 right-0
                    h-56
                    -z-10
                    bg-gradient-to-b
                    from-black
                    to-transparent
                "
            />

            {/* Bottom Fade */}

            <div
                className="
                    fixed bottom-0 left-0 right-0
                    h-56
                    -z-10
                    bg-gradient-to-t
                    from-black
                    to-transparent
                "
            />
        </>
    );
}
