import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                    <span className="text-xl font-serif font-bold text-foreground">ShaadiBio</span>
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    {/* Placeholder links if needed */}
                </div>

                <Link href="/templates">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6">
                        Start Creating
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
