export default function Background() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Top Left Glow */}
            <div className="absolute left-[-250px] top-[-250px] h-[650px] w-[650px] rounded-full bg-blue-500/20 blur-[160px]" />

            {/* Top Right Glow */}
            <div className="absolute right-[-250px] top-[100px] h-[600px] w-[600px] rounded-full bg-cyan-500/15 blur-[180px]" />

            {/* Bottom Glow */}
            <div className="absolute bottom-[-300px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[220px]" />
        </div>
    );
}
