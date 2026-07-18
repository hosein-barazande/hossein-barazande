import {ReactNode} from "react";

import type {HeadingLevel} from "@/styles/Typography";
import {typography} from "@/styles/Typography";

interface HeadingProps {
    level: HeadingLevel;
    children: ReactNode;
    className?: string;
}

export default function Heading({level, children, className = ""}: HeadingProps) {
    const styles = {
        1: typography.h1,
        2: typography.h2,
        3: typography.h3,
        4: typography.h4,
    };

    switch (level) {
        case 1:
            return <h1 className={`${styles[1]} ${className}`}>{children}</h1>;

        case 2:
            return <h2 className={`${styles[2]} ${className}`}>{children}</h2>;

        case 3:
            return <h3 className={`${styles[3]} ${className}`}>{children}</h3>;

        case 4:
            return <h4 className={`${styles[4]} ${className}`}>{children}</h4>;

        default:
            return null;
    }
}
