"use client";

import {useMemo, useState} from "react";

import ProjectGrid from "./ProjectGrid";
import ProjectFilter from "./ProjectFilter";

import {Project} from "@/types/project";

interface Props {
    projects: Project[];
}

export default function ProjectsContent({projects}: Props) {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
        return ["All", ...new Set(projects.flatMap((project) => project.categories))];
    }, [projects]);

    const filteredProjects =
        activeCategory === "All" ? projects : projects.filter((project) => project.categories.includes(activeCategory));

    return (
        <>
            <ProjectFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />

            <ProjectGrid projects={filteredProjects} />
        </>
    );
}
