import { BiodataData } from "@/lib/types";
import { WatermarkFooter } from "./shared/Watermark";
import { BiodataSection } from "./shared/BiodataSection";
import { InfoRow } from "./shared/InfoRow";

export function RoyalHeritage({ data }: { data: BiodataData }) {
    if (!data.personalDetails?.fullName) return null;

    const { personalDetails, educationCareer, familyDetails, photos } = data;
    const { fullName, height, dateOfBirth, city, horoscope } = personalDetails;
    const { education } = educationCareer;
    const photo = photos?.[0] || null;

    return (
        <div id="biodata-preview" className="w-[210mm] min-h-[297mm] bg-[#8B0000] text-white shadow-lg relative p-8 font-serif overflow-hidden">
            {/* Royal Border/Frame */}
            <div className="absolute inset-4 border-2 border-[#D4AF37] pointer-events-none" />
            <div className="absolute inset-6 border border-[#D4AF37] border-dashed pointer-events-none opacity-50" />

            {/* Content Container (Card) */}
            <div className="bg-[#580000] h-full w-full rounded-sm shadow-inner p-8 flex flex-col relative z-10 border border-[#D4AF37]/20">

                {/* Header */}
                <div className="text-center border-b border-[#D4AF37]/30 pb-8 mb-8">
                    <div className="inline-block border-2 border-[#D4AF37] p-1 rounded-full mb-4">
                        <div className="w-28 h-28 rounded-full overflow-hidden bg-[#2A0000]">
                            {photo ? (
                                <img src={photo} className="w-full h-full object-cover" />
                            ) : (
                                <span className="flex h-full items-center justify-center text-[#D4AF37]">Photo</span>
                            )}
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-[#FFD700] uppercase tracking-wider mb-2">
                        {fullName}
                    </h1>
                    <p className="text-[#D4AF37] opacity-80 uppercase tracking-[0.2em] text-sm">
                        {education}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 flex-1">
                    <BiodataSection title="Horoscope & Vitals" titleClassName="text-[#FFD700] border-b border-[#D4AF37]/30 mb-4 pb-2 text-lg">
                        <InfoRow label="Birth Date" value={dateOfBirth ? new Date(dateOfBirth).toLocaleDateString() : ''} labelClassName="text-[#E6C288]" valueClassName="text-white font-bold" />
                        <InfoRow label="Birth Time" value={horoscope?.birthTime} labelClassName="text-[#E6C288]" valueClassName="text-white font-bold" />
                        <InfoRow label="Height" value={height} labelClassName="text-[#E6C288]" valueClassName="text-white font-bold" />
                        <InfoRow label="Gotra" value={familyDetails?.gotra} labelClassName="text-[#E6C288]" valueClassName="text-white font-bold" />
                    </BiodataSection>

                    <BiodataSection title="Family Details" titleClassName="text-[#FFD700] border-b border-[#D4AF37]/30 mb-4 pb-2 text-lg">
                        <InfoRow label="Father" value={familyDetails?.fatherName} labelClassName="text-[#E6C288]" valueClassName="text-white font-bold" />
                        <InfoRow label="Mother" value={familyDetails?.motherName} labelClassName="text-[#E6C288]" valueClassName="text-white font-bold" />
                        <InfoRow label="Location" value={city} labelClassName="text-[#E6C288]" valueClassName="text-white font-bold" />
                    </BiodataSection>

                    <div className="col-span-2">
                        <BiodataSection title="Contact Info" titleClassName="text-[#FFD700] border-b border-[#D4AF37]/30 mb-4 pb-2 text-lg">
                            <div className="flex justify-between items-center bg-[#2A0000]/50 p-4 rounded border border-[#D4AF37]/20">
                                <div>
                                    <span className="block text-[#E6C288] text-xs uppercase">Phone</span>
                                    <span className="font-bold">Not specified</span>
                                </div>
                                <div className="text-right">
                                    <span className="block text-[#E6C288] text-xs uppercase">Email</span>
                                    <span className="font-bold">-</span>
                                </div>
                            </div>
                        </BiodataSection>
                    </div>
                </div>

            </div>

            <WatermarkFooter />
        </div>
    );
}
