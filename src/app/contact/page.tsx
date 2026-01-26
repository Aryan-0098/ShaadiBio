import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl text-center">
                <h1 className="text-4xl font-serif font-bold mb-6 text-[#2A2A2A]">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-12">
                    Have questions or need help with your biodata? We&apos;re here to assist you.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white p-8 rounded-xl shadow-sm border flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#FFFBF0] rounded-full flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-[#C5A045]" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Email Support</h3>
                        <p className="text-gray-500 mb-4">Get a response within 24 hours</p>
                        <a href="mailto:support@shaadibio.com" className="text-[#C5A045] font-bold hover:underline">
                            support@shaadibio.com
                        </a>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#FFFBF0] rounded-full flex items-center justify-center mb-4">
                            <MessageSquare className="w-6 h-6 text-[#C5A045]" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                        <p className="text-gray-500 mb-4">Quick help needed?</p>
                        <Button variant="outline" className="border-[#C5A045] text-[#C5A045]">
                            Chat on WhatsApp
                        </Button>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg text-sm text-blue-800 border border-blue-100">
                    <strong>Note:</strong> We typically reply between 9 AM - 6 PM IST, Monday to Saturday.
                </div>
            </main>
            <Footer />
        </div>
    );
}
