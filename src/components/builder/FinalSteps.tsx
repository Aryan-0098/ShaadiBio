'use client';
import { useBiodataStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';

export function PhotoUploadForm({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const { biodata, updateBiodata } = useBiodataStore();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target?.result) {
                    updateBiodata('photos', [ev.target.result as string]);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="max-w-xl mx-auto py-8 px-4">
            <div className="mb-8"><h2 className="text-2xl font-serif font-bold text-[#2A2A2A] border-l-4 border-[#C5A045] pl-4">Upload Photos</h2></div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange} accept="image/*" />
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#FFFBF0] rounded-full flex items-center justify-center mb-4">
                        <UploadCloud className="w-8 h-8 text-[#C5A045]" />
                    </div>
                    <p className="font-medium text-gray-700">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400 mt-1">Maximum 3 photos</p>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
                {biodata.photos.map((src, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden border">
                        <img src={src} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <div className="pt-8 flex justify-between">
                <Button type="button" variant="outline" onClick={onBack}>← Back</Button>
                <Button onClick={onNext} className="bg-[#C5A045] hover:bg-[#B39035] text-white">Next: Review →</Button>
            </div>
        </div>
    );
}

export function ReviewStep({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    return (
        <div className="max-w-xl mx-auto py-8 px-4 text-center">
            <div className="mb-8"><h2 className="text-2xl font-serif font-bold text-[#2A2A2A] border-l-4 border-[#C5A045] pl-4">Review Your Biodata</h2></div>
            <p className="text-muted-foreground mb-8">Please check the preview on the right. If everything looks good, proceed to download.</p>

            <div className="pt-8 flex justify-between">
                <Button type="button" variant="outline" onClick={onBack}>← Back</Button>
                <Button onClick={onNext} className="bg-[#C5A045] hover:bg-[#B39035] text-white">Proceed to Download →</Button>
            </div>
        </div>
    )
}

export function DownloadStep({ onBack }: { onBack: () => void }) {
    return (
        <div className="max-w-xl mx-auto py-8 px-4 text-center">
            <div className="mb-8"><h2 className="text-2xl font-serif font-bold text-[#2A2A2A]">Ready to Download</h2></div>

            <div className="bg-white p-8 rounded-xl shadow border border-gray-100 mb-8">
                <h3 className="font-bold text-lg mb-2">Free Watermarked Version</h3>
                <p className="text-sm text-gray-500 mb-4">Download a standard quality PDF with ShaadiBio watermark.</p>
                <Button className="w-full" disabled>Download PDF (Coming Soon)</Button>
            </div>

            <div className="bg-[#FFFBF0] p-8 rounded-xl border border-[#C5A045] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#C5A045] text-white text-xs px-2 py-1 rounded-bl">RECOMMENDED</div>
                <h3 className="font-bold text-lg mb-2">Premium High-Quality</h3>
                <p className="text-sm text-gray-500 mb-4">Remove watermark + HD Quality + Priority Support</p>
                <Button className="w-full bg-[#C5A045] hover:bg-[#B39035] text-white" disabled>Pay ₹99 (Phase 2)</Button>
            </div>

            <div className="pt-8 flex justify-start">
                <Button type="button" variant="ghost" onClick={onBack}>← Back to Edit</Button>
            </div>
        </div>
    )
}
