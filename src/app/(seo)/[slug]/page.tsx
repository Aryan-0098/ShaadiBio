import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SEO_PAGES } from '@/lib/seo-content';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { FAQ } from '@/components/landing/FAQ';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Generate Static Params for SSG
export async function generateStaticParams() {
    return SEO_PAGES.map((page) => ({
        slug: page.slug,
    }));
}

// Dynamic Metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = SEO_PAGES.find((p) => p.slug === params.slug);
    if (!page) return {};

    return {
        title: page.title,
        description: page.description,
        openGraph: {
            title: page.title,
            description: page.description,
            type: 'website',
        }
    };
}

export default function SeoPage({ params }: { params: { slug: string } }) {
    const page = SEO_PAGES.find((p) => p.slug === params.slug);

    if (!page) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Custom SEO Hero */}
            <section className="py-20 bg-[#FFFBF0]/50 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <span className="text-sm font-bold tracking-widest text-[#C5A045] uppercase mb-4 block">
                        ShaadiBio &bull; Free Online Tool
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mb-6 leading-tight">
                        {page.h1}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        {page.intro}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/templates">
                            <Button className="bg-[#C5A045] hover:bg-[#B39035] text-white h-12 px-8 text-lg">
                                Create Biodata Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <HowItWorks />

            {/* CTA Section */}
            <div className="bg-[#FAF9F6] py-16 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-serif font-bold mb-4">Start your partner search today</h2>
                    <p className="text-gray-500 mb-8">Join thousands of happy users who found their match using a professional biodata.</p>
                    <Link href="/builder">
                        <Button variant="outline" className="border-[#C5A045] text-[#C5A045] hover:bg-[#FFFBF0]">
                            Build My Resume
                        </Button>
                    </Link>
                </div>
            </div>

            <FAQ />
            <Footer />
        </main>
    );
}
