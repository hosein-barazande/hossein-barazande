import {ReactNode} from "react";

import type {TextVariant} from "@/styles/Typography";
import {typography} from "@/styles/Typography";

interface TextProps {
    variant?: TextVariant;
    children: ReactNode;
    className?: string;
}

export default function Text({variant = "body", children, className = ""}: TextProps) {
    return <p className={`${typography[variant]} ${className}`}>{children}</p>;
}
