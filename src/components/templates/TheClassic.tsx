import { BiodataData } from "@/lib/types";
import { WatermarkFooter } from "./shared/Watermark";
import { BiodataSection } from "./shared/BiodataSection";
import { InfoRow } from "./shared/InfoRow";

export function TheClassic({ data }: { data: BiodataData }) {
    if (!data.personalDetails?.fullName) return <div className="p-10 text-center text-gray-400">Enter details to see preview</div>;

    const { personalDetails, educationCareer, familyDetails, photos, partnerPreferences } = data;
    const { fullName, dateOfBirth, height, religion, caste, city, state, horoscope } = personalDetails;
    const { education, occupation } = educationCareer;

    // Split name
    const [firstName, ...rest] = fullName.split(" ");
    const lastName = rest.join(" ");

    const formatDate = (dateStr?: string | null) => {
        if (!dateStr) return null;
        return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const photo = photos?.[0] || null;

    return (
        <div id="biodata-preview" className="w-[210mm] min-h-[297mm] bg-white text-[#1a1a1a] shadow-lg relative p-8 md:p-12 font-serif overflow-hidden">
            {/* Border Ornament */}
            <div className="absolute inset-4 border-2 border-[#D4AF37] pointer-events-none" />
            <div className="absolute inset-6 border border-[#D4AF37]/30 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                {/* Photo & Header */}
                <div className="mb-8 flex flex-col items-center">
                    {photo ? (
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4AF37] p-1 mb-4 overflow-hidden bg-white">
                            <img src={photo} alt="Profile" className="w-full h-full object-cover rounded-full" />
                        </div>
                    ) : (
                        <div className="w-32 h-32 rounded-full border-4 border-[#E3D4B5] bg-[#F9F5EB] mb-4 flex items-center justify-center text-[#D4AF37] text-3xl font-bold">
                            {firstName?.[0]}{lastName?.[0]}
                        </div>
                    )}

                    <h1 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] uppercase tracking-wide mb-2">
                        {firstName} {lastName}
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 uppercase tracking-widest font-sans">
                        {education || "Education Not Specified"} &bull; {occupation || "Occupation Not Specified"}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-8 text-left max-w-2xl mx-auto px-4">

                    <BiodataSection title="Personal Details">
                        <InfoRow label="Date of Birth" value={formatDate(dateOfBirth)} />
                        {horoscope?.birthTime && <InfoRow label="Time of Birth" value={horoscope.birthTime} />}
                        {city && <InfoRow label="Place of Birth" value={`${city}, ${state}`} />}
                        <InfoRow label="Height" value={height} />
                        <InfoRow label="Religion" value={`${religion} ${caste ? '- ' + caste : ''}`} />
                    </BiodataSection>

                    {familyDetails && (
                        <BiodataSection title="Family Background">
                            <InfoRow label="Father" value={familyDetails.fatherName} />
                            <InfoRow label="Mother" value={familyDetails.motherName} />
                            <InfoRow label="Family Type" value={familyDetails.familyType} />
                        </BiodataSection>
                    )}

                    {partnerPreferences && (
                        <BiodataSection title="Partner Preferences">
                            <p className="text-sm text-gray-600 italic text-center px-4 leading-relaxed">
                                {partnerPreferences.expectations ? `"${partnerPreferences.expectations.substring(0, 150)}${partnerPreferences.expectations.length > 150 ? '...' : ''}"` : "Matches typically look for compatibility in values and lifestyle."}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                {partnerPreferences.ageRange && <InfoRow label="Age Range" value={`${partnerPreferences.ageRange[0]} - ${partnerPreferences.ageRange[1]} Years`} />}
                                {partnerPreferences.heightRange && <InfoRow label="Height Range" value={`${partnerPreferences.heightRange[0]} - ${partnerPreferences.heightRange[1]}`} />}
                            </div>
                        </BiodataSection>
                    )}
                </div>
            </div>

            <WatermarkFooter />
        </div>
    );
}
