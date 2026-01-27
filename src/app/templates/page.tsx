'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/layout/PageTransition';
import { useBiodataStore } from '@/lib/store';
import { CheckCircle2, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const TEMPLATES = [
    {
        id: 'basic-modern',
        name: 'The Classic',
        desc: 'Timeless Elegance',
        color: 'bg-[#E3D4B5]', // Beige/Gold-ish
        active: true,
        category: 'Traditional'
    },
    {
        id: 'minimal-modern',
        name: 'Minimal Modern',
        desc: 'Clean & Simple',
        color: 'bg-[#EEF2FF]', // Soft Blue-White
        active: true,
        category: 'Modern'
    },
    {
        id: 'floral',
        name: 'Soft Floral',
        desc: 'Romantic & Artistic',
        color: 'bg-[#FFD1DC]',
        active: true,
        category: 'Floral'
    },
    {
        id: 'royal',
        name: 'Royal Heritage',
        desc: 'Luxury & Majestic',
        color: 'bg-[#580000]', // Deep Red
        active: true,
        category: 'Traditional'
    },
];

const CATEGORIES = ['All', 'Traditional', 'Modern', 'Floral'];

export default function TemplatesPage() {
    const router = useRouter();
    const { setTemplate, selectedTemplateId } = useBiodataStore();
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const handleSelect = (id: string) => {
        setTemplate(id);
    };

    const handleContinue = () => {
        router.push('/builder');
    };

    const filteredTemplates = selectedCategory === 'All'
        ? TEMPLATES
        : TEMPLATES.filter(t => t.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#FAF9F6] overflow-x-hidden flex flex-col">
            <Navbar />

            <main className="container mx-auto px-4 py-8 md:py-12 flex-1 mb-20 md:mb-0">
                <PageTransition>
                    <div className="text-center mb-8 md:mb-12">
                        <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">The Perfect Beginning</p>
                        <h1 className="text-3xl md:text-5xl font-serif text-[#2A2A2A] mb-4">
                            Choose Your <span className="text-primary italic">Signature Look</span>
                        </h1>
                        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                            Select a premium template that beautifully reflects your personality.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                                    ? 'bg-[#C5A045] text-white shadow-md transform scale-105'
                                    : 'bg-white text-gray-500 hover:bg-gray-50 border hover:border-[#C5A045]/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-32">
                        {filteredTemplates.map((t) => {
                            const isSelected = selectedTemplateId === t.id;

                            return (
                                <div key={t.id} className="relative group">
                                    {/* Card Container */}
                                    <div
                                        onClick={() => t.active && handleSelect(t.id)}
                                        className={`
                                            relative aspect-[3/4] rounded-2xl p-3 cursor-pointer transition-all duration-300
                                            ${t.active ? 'hover:-translate-y-2 shadow-lg hover:shadow-xl' : 'opacity-80 grayscale-[0.5]'}
                                            ${isSelected ? 'ring-4 ring-[#C5A045] ring-offset-2' : ''}
                                            ${t.color}
                                        `}
                                    >
                                        {/* Inner Paper Appearance */}
                                        <div className="bg-white/90 h-full w-full shadow-inner rounded-xl flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
                                            {/* Preview Mockup Hint */}
                                            <div className="absolute top-0 left-0 w-full h-2 bg-black/5" />

                                            {/* Content Lines */}
                                            <div className="w-16 h-1 bg-gray-300 mb-4 rounded-full" />
                                            <div className="w-full h-px bg-gray-200 mb-2" />
                                            <div className="w-full h-px bg-gray-200 mb-2" />
                                            <div className="w-3/4 h-px bg-gray-200 mb-8" />

                                            <h3 className="font-serif font-bold text-gray-800 uppercase tracking-widest text-sm relative z-10">{t.name}</h3>

                                            {/* Category Badge */}
                                            <span className="absolute bottom-4 text-[10px] text-gray-400 uppercase tracking-wider">{t.category}</span>
                                        </div>

                                        {/* Badge/Overlay */}
                                        {t.active && isSelected && (
                                            <div className="absolute top-2 right-2 bg-[#C5A045] text-white rounded-full p-1 shadow-md z-10">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                        )}
                                        {!t.active && (
                                            <div className="absolute inset-0 bg-black/5 rounded-2xl flex items-center justify-center z-20">
                                                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold flex gap-1 items-center">
                                                    <Lock className="w-3 h-3" /> Coming Phase 2
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="text-center mt-4 space-y-2 px-2">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-serif font-bold text-lg text-[#2A2A2A]">{t.name}</h3>
                                        </div>
                                        <p className="text-xs text-[#C5A045] uppercase tracking-wide">{t.desc}</p>

                                        {t.active ? (
                                            <Button
                                                variant={isSelected ? "default" : "outline"}
                                                size="sm"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSelect(t.id);
                                                }}
                                                className={`w-full transition-colors ${isSelected ? "bg-[#C5A045] text-white hover:bg-[#b08d3b]" : "border-[#C5A045] text-[#C5A045] hover:bg-[#C5A045] hover:text-white"}`}
                                            >
                                                {isSelected ? "Selected" : "Use Template"}
                                            </Button>
                                        ) : (
                                            <Button size="sm" disabled variant="ghost" className="w-full text-xs">
                                                Coming Soon
                                            </Button>
                                        )}
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
