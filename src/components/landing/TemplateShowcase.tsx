import Image from 'next/image';

const TEMPLATES = [
    { id: 'classic', name: 'The Classic', color: 'bg-[#C8A17D]', image: '/templates/classic.png' },
    { id: 'floral', name: 'Modern Floral', color: 'bg-[#FFD1DC]', image: '/templates/floral.png' },
    { id: 'royal', name: 'Royal Heritage', color: 'bg-[#580000]', image: '/templates/royal.png' },
    { id: 'elegant', name: 'The Elegant', color: 'bg-[#E5E7EB]', image: '/templates/elegant.png' },
];

export function TemplateShowcase() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-[#2A2A2A] mb-4">
                    Choose from Premium Templates
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
                    Exquisite designs curated by top Indian designers, blending tradition with modernity.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {TEMPLATES.map((t) => (
                        <div key={t.id} className="group cursor-pointer">
                            <div className={`relative aspect-[3/4] rounded-t-full rounded-b-lg overflow-hidden ${t.color} p-4 shadow-lg group-hover:-translate-y-2 transition-transform duration-300`}>
                                {/* This represents the arch shape in the design */}
                                <div className="bg-white/90 h-full w-full shadow-inner flex items-center justify-center">
                                    <span className="text-xs uppercase tracking-widest opacity-30 font-bold">{t.name}</span>
                                </div>
                            </div>
                            <h3 className="mt-4 font-serif font-bold text-lg text-[#2A2A2A]">{t.name}</h3>
                            <p className="text-xs text-[#C5A045] uppercase tracking-wide">Premium</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
