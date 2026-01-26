'use client';

import { useBiodataStore } from '@/lib/store';
import { BasicModernTemplate } from './BasicModernTemplate';
// Import other templates in future

export function LivePreview() {
    const { biodata, selectedTemplateId } = useBiodataStore();

    return (
        <div className="hidden lg:flex flex-col h-full bg-[#FAF9F6] border-l border-gray-200">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Live Preview
                </h2>
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded border flex items-center justify-center text-xs cursor-pointer hover:bg-gray-50">-</div>
                    <div className="w-8 h-8 rounded border flex items-center justify-center text-xs cursor-pointer hover:bg-gray-50">+</div>
                </div>
            </div>

            {/* Scrollable Preview Area */}
            <div className="flex-1 overflow-y-auto p-8 flex items-start justify-center bg-secondary/30">
                {/* Scale container if needed for zooming */}
                <div className="transform scale-[0.6] origin-top shadow-2xl transition-all duration-300">
                    {selectedTemplateId === 'basic-modern' && <BasicModernTemplate data={biodata} />}
                    {/* Fallback */}
                    {!selectedTemplateId && <div className="p-12 bg-white">Select a template</div>}
                </div>
            </div>

            <div className="p-2 text-center text-xs text-gray-400 bg-white border-t">
                Preview updates automatically as you type
            </div>
        </div>
    );
}
