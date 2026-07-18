import {ReactNode} from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({children, className = ""}: CardProps) {
    return (
        <div
            className={`group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-blue-500/40
            hover:bg-white/10
            hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] ${className}`}
        >
            {children}
        </div>
    );
}
