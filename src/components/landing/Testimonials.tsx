import { Star } from 'lucide-react';

const REVIEWS = [
    {
        name: "Priya Sharma",
        location: "Mumbai",
        text: "The templates are absolutely beautiful. I got compliments from my prospective in-laws about how professional my biodata looked!",
        rating: 5
    },
    {
        name: "Rahul Verma",
        location: "Delhi",
        text: "So easy to use. I was struggling with Word documents, but this tool made it effortless. Highly recommended!",
        rating: 5
    },
    {
        name: "Anjali Gupta",
        location: "Bangalore",
        text: "Loved the instant PDF download. The design is elegant and exactly what I was looking for. Thank you ShaadiBio!",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-widest text-[#C5A045] uppercase mb-2 block">Success Stories</span>
                    <h2 className="text-3xl font-serif font-bold text-[#2A2A2A]">Loved by 10,000+ Users</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-[#C5A045] text-[#C5A045]" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic leading-relaxed">&quot;{review.text}&quot;</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
