import Heading from "@/components/shared/typography/Heading";
import Text from "@/components/shared/typography/Text";

import Card from "@/components/ui/Card";

export default function ContactCard() {
    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-10">
                <Heading level={3}>Contact Information</Heading>

                <div className="mt-8 space-y-6">
                    <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="mt-1 text-lg font-medium">hosein.barazande@outlook.com</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">Location</p>
                        <p className="mt-1 text-lg font-medium">Iran • Available for Relocation</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">Website</p>
                        <p className="mt-1 text-lg font-medium">digitizerco.net</p>
                    </div>
                </div>
            </Card>

            <Card className="flex flex-col items-center justify-center p-10">
                <div className="flex h-56 w-56 items-center justify-center rounded-2xl bg-white font-semibold text-slate-900">
                    QR CODE
                </div>

                <Text className="mt-6 text-center">Scan to view my portfolio</Text>
            </Card>
        </div>
    );
}
