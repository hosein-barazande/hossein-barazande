import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Projects | Hossein Barazande",
    description: "Portfolio projects in Full-Stack Development, Senior SEO Specialist and modern web technologies.",
};

export default function ProjectsLayout({children}: {children: React.ReactNode}) {
    return children;
}
