"use client";

import Badge from "@/components/ui/Badge";

interface Props {
    categories: string[];
    active: string;
    onChange: (category: string) => void;
}

export default function ProjectFilter({categories, active, onChange}: Props) {
    return (
        <div className="mt-14 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
                <button key={category} onClick={() => onChange(category)} className="transition">
                    <Badge
                        className={
                            active === category
                                ? "border-cyan-400 bg-cyan-500/10 text-white"
                                : "hover:border-cyan-400 hover:text-white"
                        }
                    >
                        {category}
                    </Badge>
                </button>
            ))}
        </div>
    );
}
