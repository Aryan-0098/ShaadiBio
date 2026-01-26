import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-serif font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-stone max-w-none">
                    <p className="mb-4">Last updated: January 2024</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">1. Acceptance of Terms</h2>
                    <p>By accessing and using ShaadiBio, you agree to be bound by these Terms of Service.</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">2. Service Description</h2>
                    <p>ShaadiBio provides online tools for creating marriage biodata formats. We offer both free (watermarked) and premium (non-watermarked) download options.</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">3. User Conduct</h2>
                    <p>You agree not to use the service for any unlawful purpose or to violate any laws in your jurisdiction.</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">4. Refunds</h2>
                    <p>Due to the digital nature of our product, we generally do not offer refunds once a premium file has been downloaded, unless there is a technical error on our part.</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">5. Disclaimer</h2>
                    <p>The service is provided &quot;as is&quot; without warranties of any kind. We are not responsible for any outcomes resulting from the use of the biodata created on our platform.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
