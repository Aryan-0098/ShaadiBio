import { PenLine, FileText, Download } from 'lucide-react';

const STEPS = [
    {
        icon: PenLine,
        title: "Enter Details",
        description: "Fill in your personal, family, and professional details in our easy-to-use form."
    },
    {
        icon: FileText,
        title: "Select Template",
        description: "Choose from our collection of premium, professionally designed biodata templates."
    },
    {
        icon: Download,
        title: "Download PDF",
        description: "Get your high-quality biodata PDF instantly. Watermark-free options available."
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-4">How It Works</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Create a stunning marriage biodata in 3 simple steps. No design skills needed.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-[#C5A045]/30 to-transparent -z-10" />

                    {STEPS.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#FFFBF0] border border-[#C5A045]/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <step.icon className="w-8 h-8 text-[#C5A045]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
