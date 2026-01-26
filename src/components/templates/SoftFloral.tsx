import { BiodataData } from "@/lib/types";
import { WatermarkFooter } from "./shared/Watermark";
import { BiodataSection } from "./shared/BiodataSection";
import { InfoRow } from "./shared/InfoRow";

export function SoftFloral({ data }: { data: BiodataData }) {
    if (!data.personalDetails?.fullName) return null;
    const { personalDetails, educationCareer, familyDetails, photos } = data;
    const { fullName, height, dateOfBirth, city, horoscope } = personalDetails;
    const { education, occupation } = educationCareer;

    // Split name
    const [firstName, ...rest] = fullName.split(" ");
    const lastName = rest.join(" ");
    const photo = photos?.[0] || null;

    return (
        <div id="biodata-preview" className="w-[210mm] min-h-[297mm] bg-[#FFFDFA] text-gray-800 shadow-lg relative p-12 font-serif overflow-hidden">

            {/* Soft Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-100 to-transparent rounded-bl-full opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-100 to-transparent rounded-tr-full opacity-60 pointer-events-none" />

            <div className="relative z-10 text-center">
                <div className="border border-rose-200 p-8 pt-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                    {/* Photo */}
                    <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
                        {photo ? (
                            <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-rose-50 flex items-center justify-center text-rose-300">Image</div>
                        )}
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800 mb-2 font-serif italic">
                        {firstName} <span className="text-rose-400">{lastName}</span>
                    </h1>
                    <div className="flex justify-center gap-4 text-sm text-gray-500 uppercase tracking-widest mb-8">
                        <span>{dateOfBirth ? new Date(dateOfBirth).getFullYear() : ''} Born</span> &bull; <span>{height}</span>
                    </div>

                    <div className="w-16 h-px bg-rose-300 mx-auto mb-8" />

                    <div className="grid gap-8 text-left max-w-lg mx-auto">
                        <BiodataSection title="About" titleClassName="text-rose-400 font-bold text-center mb-4 uppercase text-xs tracking-[0.2em]">
                            <div className="text-center text-gray-600 leading-relaxed">
                                {education} professional working as {occupation}.
                            </div>
                        </BiodataSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                            <BiodataSection title="Details" titleClassName="border-b border-rose-200 text-rose-500 font-bold mb-3 pb-1">
                                <InfoRow label="DOB" value={dateOfBirth ? new Date(dateOfBirth).toLocaleDateString() : ''} labelClassName="text-rose-900/60" />
                                <InfoRow label="Time" value={horoscope?.birthTime} labelClassName="text-rose-900/60" />
                                <InfoRow label="Place" value={city} labelClassName="text-rose-900/60" />
                            </BiodataSection>

                            <BiodataSection title="Family" titleClassName="border-b border-rose-200 text-rose-500 font-bold mb-3 pb-1">
                                <InfoRow label="Father" value={familyDetails?.fatherName} labelClassName="text-rose-900/60" />
                                <InfoRow label="Mother" value={familyDetails?.motherName} labelClassName="text-rose-900/60" />
                                <InfoRow label="Location" value={city} labelClassName="text-rose-900/60" />
                            </BiodataSection>
                        </div>
                    </div>
                </div>
            </div>

            <WatermarkFooter />
        </div>
    );
}
