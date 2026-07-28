import Image from "next/image";
import Link from "next/link";

import {Mail, Phone, Globe, MapPin} from "lucide-react";

import {FaGithub, FaLinkedin, FaTelegram, FaWhatsapp} from "react-icons/fa6";

import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import Card from "@/components/ui/Card";

export default function ContactCard() {
    return (
        <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}

            <Card className="p-10">
                <Heading level={3}>Contact Information</Heading>

                <div className="mt-8 space-y-6">
                    <Link
                        href="mailto:hosein.barazande@outlook.com"
                        className="flex items-center gap-4 transition hover:text-cyan-400"
                    >
                        <Mail className="h-5 w-5" />

                        <div>
                            <p className="text-sm text-slate-400">Email</p>

                            <p className="font-medium">hosein.barazande@outlook.com</p>
                        </div>
                    </Link>

                    <Link href="tel:+989912150416" className="flex items-center gap-4 transition hover:text-cyan-400">
                        <Phone className="h-5 w-5" />

                        <div>
                            <p className="text-sm text-slate-400">Phone</p>

                            <p className="font-medium">+98 991 2150416</p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        <MapPin className="h-5 w-5" />

                        <div>
                            <p className="text-sm text-slate-400">Location</p>

                            <p className="font-medium">Iran • Available for Relocation</p>
                        </div>
                    </div>

                    <Link
                        href="https://digitizerco.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 transition hover:text-cyan-400"
                    >
                        <Globe className="h-5 w-5" />

                        <div>
                            <p className="text-sm text-slate-400">Website</p>

                            <p className="font-medium">digitizerco.net</p>
                        </div>
                    </Link>

                    <Link
                        href="https://github.com/hosein-barazande"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 transition hover:text-cyan-400"
                    >
                        <FaGithub className="h-5 w-5" />

                        <div>
                            <p className="text-sm text-slate-400">GitHub</p>

                            <p className="font-medium">github.com/hosein-barazande</p>
                        </div>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/hosein-barazande-873640bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 transition hover:text-cyan-400"
                    >
                        <FaLinkedin className="h-5 w-5" />

                        <div>
                            <p className="text-sm text-slate-400">LinkedIn</p>

                            <p className="font-medium">View Profile</p>
                        </div>
                    </Link>

                    <Link
                        href="https://wa.me/989912150416"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 transition hover:text-cyan-400"
                    >
                        <FaWhatsapp className="h-5 w-5" />

                        <div>
                            <p className="text-sm text-slate-400">WhatsApp</p>

                            <p className="font-medium">Chat on WhatsApp</p>
                        </div>
                    </Link>

                    <Link
                        href="https://t.me/@hoseinBarazande"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 transition hover:text-cyan-400"
                    >
                        <FaTelegram className="h-5 w-5" />

                        <div>
                            <p className="text-sm text-slate-400">Telegram</p>

                            <p className="font-medium">Message on Telegram</p>
                        </div>
                    </Link>
                </div>
            </Card>

            {/* QR Code */}

            <Card className="flex flex-col items-center justify-center p-10">
                <div className="rounded-3xl bg-white p-5 shadow-2xl">
                    <Image
                        src="/images/contact/contact-qr.svg"
                        alt="Save Contact QR Code"
                        width={220}
                        height={220}
                        priority
                    />
                </div>

                <Heading level={3} className="mt-8 text-center">
                    Save My Contact
                </Heading>

                <Text className="mt-4 max-w-xs text-center">
                    Scan this QR code to instantly save my contact information to your phone.
                </Text>
            </Card>
        </div>
    );
}
