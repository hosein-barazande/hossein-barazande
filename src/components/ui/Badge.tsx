import {ReactNode} from "react";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export default function Badge({children, className = ""}: BadgeProps) {
    return (
        <span className={`inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium ${className}`}>
            {children}
        </span>
    );
}
