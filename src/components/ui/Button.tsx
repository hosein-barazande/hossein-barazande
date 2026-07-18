import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

export default function Button({children, variant = "primary", className = "", ...props}: ButtonProps) {
    const styles = {
        primary: "rounded-full px-6 py-3 font-medium transition-all",
        secondary: "rounded-full border px-6 py-3 font-medium transition-all",
    };

    return (
        <button className={`${styles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
