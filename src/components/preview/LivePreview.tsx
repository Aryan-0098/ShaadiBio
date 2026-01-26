'use client';

import { useBiodataStore } from '@/lib/store';
import { BasicModernTemplate } from './BasicModernTemplate';
// Import other templates in future

export function LivePreview() {
    const { biodata, selectedTemplateId } = useBiodataStore();

    return (
        <div className="flex flex-col h-full bg-[#FAF9F6] border-l border-gray-200">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Live Preview
                </h2>
                {/* Visual controls only */}
                <div className="flex gap-2 opacity-50 pointer-events-none">
                    <div className="w-8 h-8 rounded border flex items-center justify-center text-xs">-</div>
                    <div className="w-8 h-8 rounded border flex items-center justify-center text-xs">+</div>
                </div>
            </div>

            {/* Scrollable Preview Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex items-start justify-center bg-secondary/30">
                {/* Responsive Scale: 0.4 on mobile, 0.65 on desktop */}
                <div className="transform scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.65] origin-top shadow-2xl transition-all duration-300">
                    {selectedTemplateId === 'basic-modern' && <BasicModernTemplate data={biodata} />}
                    {/* Fallback */}
                    {!selectedTemplateId && <div className="p-12 bg-white">Select a template</div>}
                </div>
            </div>
            {/* Footer note hidden on mobile to save space */}
            <div className="p-2 text-center text-xs text-gray-400 bg-white border-t hidden md:block">
                Preview updates automatically as you type
            </div>
        </div>
    );
}
