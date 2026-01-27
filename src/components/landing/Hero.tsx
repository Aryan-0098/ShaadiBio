import Link from 'next/link';

import { MotionButton } from '@/components/ui/motion-button';
import { CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <div className="relative overflow-hidden py-16 md:py-24 bg-[#FFFBF0]/50">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="max-w-xl animate-in slide-in-from-left duration-700">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 block">
                        Premium Biodata Maker
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif text-[#2A2A2A] leading-tight mb-6">
                        Make a premium marriage biodata <br />
                        in <span className="text-primary italic">2 minutes</span>
                    </h1>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                        Professional, beautiful, and effortless. Impress your prospects with a stunning profile crafted with traditional elegance. No login required.
                    </p>
                    <p className="text-xs text-gray-500 mb-8 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Free PDF (Watermarked) • Premium ₹29 (No Watermark)
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <Link href="/templates">
                            <MotionButton
                                size="lg"
                                className="bg-[#C5A045] hover:bg-[#B39035] text-white rounded-md px-8 h-12 text-lg shadow-lg hover:shadow-xl dark:shadow-none"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Creating Free
                            </MotionButton>
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground self-center">
                            <CheckCircle2 className="w-4 h-4 text-[#C5A045]" /> No credit card needed
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative animate-in slide-in-from-right duration-700 delay-200">
                    {/* Using a placeholder card/image that resembles the couple looking at tablet */}
                    <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-2 transform hover:rotate-0 transition-transform duration-500">
                        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                            {/* Placeholder for the Couple Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDFBF7] to-[#EAE0C8]" />
                            <span className="relative text-gray-400 font-serif italic text-lg opacity-50">
                                [Couple Image Placeholder]
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
