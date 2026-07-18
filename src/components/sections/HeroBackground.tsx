export default function HeroBackground() {
    return (
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
                    backgroundSize: "64px 64px",
                }}
            />

            {/* Top Glow */}
            <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Bottom Left Glow */}
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Right Glow */}
            <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
    );
}
