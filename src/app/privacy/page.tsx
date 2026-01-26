import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-serif font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-stone max-w-none">
                    <p className="mb-4">Last updated: January 2024</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">1. Information We Collect</h2>
                    <p>We collect information you voluntarily provide when creating a biodata, including personal details, family information, and photographs. This information is stored locally on your device and temporarily processed by our servers solely for the purpose of generating your PDF.</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">2. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Generate and download your marriage biodata PDF.</li>
                        <li>Improve our templates and user experience.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6 mb-4">3. Data Security</h2>
                    <p>We prioritize your privacy. We do not sell your personal data to third parties. Photographs uploaded are processed essentially and not used for any other purpose.</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">4. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at support@shaadibio.com.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
