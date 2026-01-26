import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/landing/Hero';
import { TemplateShowcase } from '@/components/landing/TemplateShowcase';
import { PageTransition } from '@/components/layout/PageTransition';
import { Lock, Eye, IndianRupee } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageTransition className="flex-1">
        <Hero />
        <TemplateShowcase />

        {/* Features Section */}
        <section className="py-24 bg-[#FAF9F6]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif text-[#2A2A2A] mb-4">Simple & Transparent</h2>
            <div className="w-16 h-1 bg-[#C5A045] mx-auto mb-8 rounded-full" />
            <p className="text-muted-foreground mb-12">We value your time, privacy, and traditions.</p>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Lock className="w-6 h-6 text-[#C5A045]" />}
                title="No Login Required"
                desc="Start creating immediately without sharing your email or phone number."
              />
              <FeatureCard
                icon={<Eye className="w-6 h-6 text-[#C5A045]" />}
                title="Live Preview"
                desc="See your changes instantly as you type. What you see is exactly what you get."
              />
              <FeatureCard
                icon={<IndianRupee className="w-6 h-6 text-[#C5A045]" />}
                title="₹99 Watermark-free"
                desc="Premium quality high-resolution PDF export at an affordable price."
              />
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-[#FFFBF0] rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="font-serif font-bold text-xl mb-3 text-[#2A2A2A]">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
