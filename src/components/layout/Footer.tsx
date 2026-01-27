import { Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#FFFBF0] py-12 border-t border-[#F5E6CC]">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                    <span className="font-serif font-bold text-lg">ShaadiBio</span>
                </div>
                <div className="text-sm text-muted-foreground flex justify-center gap-6 mb-4">
                    <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                    <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                    <Link href="/refund" className="hover:text-primary">Refund Policy</Link>
                    <Link href="/contact" className="hover:text-primary">Contact</Link>
                </div>
                <div className="text-xs text-muted-foreground">
                    © 2024 ShaadiBio. Made with ❤️ in India.
                </div>
            </div>
        </footer>
    );
}
