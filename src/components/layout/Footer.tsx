import Container from "@/components/ui/Container";

import Text from "@/components/shared/typography/Text";

import {profile} from "@/data/profile";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-8">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Text variant="small">
                        © {year} {profile.name}. All rights reserved.
                    </Text>

                    <div className="flex items-center gap-6">
                        <a
                            href={profile.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            GitHub
                        </a>

                        <a
                            href={profile.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            Website
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
