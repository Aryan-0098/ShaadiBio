import { Heart } from "lucide-react";

export function WatermarkFooter() {
    return (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center opacity-70 print:opacity-100">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border text-[10px] font-medium text-gray-500 shadow-sm">
                <Heart className="w-3 h-3 text-[#C5A045] fill-current" />
                <span>Made with ShaadiBio.com</span>
            </div>
        </div>
    );
}
