import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RefundPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-serif font-bold mb-8">Refund & Cancellation Policy</h1>
                <div className="prose prose-stone max-w-none">
                    <p className="mb-4">Last updated: January 2024</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">No Refunds Policy</h2>
                    <p>ShaadiBio provides digital services and downloadable digital documents. Due to the nature of digital products, all sales are final and refunds or cancellations are not provided.</p>

                    <p>Once a premium plan is purchased and the watermark-free PDF has been generated or downloaded, we cannot offer any reimbursement or cancellation of the service.</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">Exceptions</h2>
                    <p>If you encounter a technical error that prevents you from accessing your purchased content, please contact our support team. We will investigate the issue and may provide a refund or resolution at our sole discretion if a technical failure on our end is confirmed.</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">Contact Us</h2>
                    <p>If you have any questions about this Refund Policy, please contact us at Shaadibio.help@gmail.com.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
