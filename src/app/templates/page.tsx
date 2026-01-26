'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/layout/PageTransition';
import { useBiodataStore } from '@/lib/store';
import { CheckCircle2, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TEMPLATES = [
    {
        id: 'basic-modern',
        name: 'The Classic',
        desc: 'Timeless Elegance',
        color: 'bg-[#E3D4B5]', // Beige/Gold-ish
        active: true
    },
    {
        id: 'floral',
        name: 'Modern Floral',
        desc: 'Soft & Romantic',
        color: 'bg-[#FFD1DC]',
        active: false
    },
    {
        id: 'royal',
        name: 'Royal Heritage',
        desc: 'Grand & Traditional',
        color: 'bg-[#580000]',
        active: false
    },
    {
        id: 'dark',
        name: 'Dark Premium',
        desc: 'Elegant Night',
        color: 'bg-[#1a1a1a]',
        active: false
    },
];

export default function TemplatesPage() {
    const router = useRouter();
    const { setTemplate, selectedTemplateId } = useBiodataStore();

    const handleSelect = (id: string) => {
        setTemplate(id);
        // Optional: wait a bit or direct?
    };

    const handleContinue = () => {
        router.push('/builder');
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <PageTransition>
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">The Perfect Beginning</p>
                        <h1 className="text-4xl md:text-5xl font-serif text-[#2A2A2A] mb-4">
                            Choose Your <span className="text-primary italic">Signature Look</span>
                        </h1>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Select a premium template that beautifully reflects your personality, tradition, and elegance.
                        </p>
                    </div>

                    {/* Filter Tabs Mockup */}
                    <div className="flex justify-center gap-4 mb-12">
                        {['All', 'Traditional', 'Modern', 'Dark Mode', 'Floral'].map((tab, i) => (
                            <button
                                key={tab}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${i === 0
                                    ? 'bg-[#C5A045] text-white shadow-md'
                                    : 'bg-white text-muted-foreground hover:bg-gray-50 border'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                        {TEMPLATES.map((t) => {
                            const isSelected = selectedTemplateId === t.id;

                            return (
                                <div key={t.id} className="relative group">
                                    {/* Card Container */}
                                    <div
                                        onClick={() => t.active && handleSelect(t.id)}
                                        className={`
                                relative aspect-[3/4] rounded-2xl p-4 cursor-pointer transition-all duration-300
                                ${t.active ? 'hover:-translate-y-2 shadow-lg hover:shadow-xl' : 'opacity-80 grayscale-[0.5]'}
                                ${isSelected ? 'ring-4 ring-[#C5A045] ring-offset-4' : ''}
                                ${t.color}
                            `}
                                    >
                                        {/* Inner Paper Appearance */}
                                        <div className="bg-white/90 h-full w-full shadow-inner rounded-xl flex flex-col items-center justify-center p-6 text-center">
                                            {/* Mock Content Lines */}
                                            <div className="w-16 h-1 bg-gray-300 mb-4" />
                                            <div className="w-full h-px bg-gray-200 mb-2" />
                                            <div className="w-full h-px bg-gray-200 mb-2" />
                                            <div className="w-3/4 h-px bg-gray-200 mb-8" />

                                            <h3 className="font-serif font-bold text-gray-800 uppercase tracking-widest text-sm">{t.name}</h3>
                                        </div>

                                        {/* Badge/Overlay */}
                                        {t.active && isSelected && (
                                            <div className="absolute top-4 right-4 bg-[#C5A045] text-white rounded-full p-1 shadow-md">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                        )}
                                        {!t.active && (
                                            <div className="absolute inset-0 bg-black/5 rounded-2xl flex items-center justify-center">
                                                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold flex gap-1 items-center">
                                                    <Lock className="w-3 h-3" /> Coming Phase 2
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="text-center mt-4">
                                        <h3 className="font-serif font-bold text-lg text-[#2A2A2A]">{t.name}</h3>
                                        <p className="text-xs text-[#C5A045] uppercase tracking-wide">{t.desc}</p>
                                        {isSelected && <span className="inline-block mt-2 text-xs bg-[#C5A045]/10 text-[#C5A045] px-2 py-0.5 rounded">Selected</span>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </PageTransition>
            </main>

            {/* Sticky Bottom Bar for Mobile/Desktop */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center z-50">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase text-muted-foreground mr-2 hidden sm:inline">Current Choice:</span>
                    <span className="font-serif font-bold text-[#2A2A2A]">
                        {TEMPLATES.find(t => t.id === selectedTemplateId)?.name}
                    </span>
                </div>
                <div className="flex gap-4">
                    <Button variant="ghost" className="text-muted-foreground">Preview Full</Button>
                    <Button onClick={handleContinue} className="bg-[#C5A045] hover:bg-[#B39035] text-white rounded-full px-8 shadow-lg">
                        Continue →
                    </Button>
                </div>
            </div>
        </div>
    );
}
