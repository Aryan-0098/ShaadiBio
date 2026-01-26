import { BiodataData } from "@/lib/types";
import { WatermarkFooter } from "./shared/Watermark";
import { BiodataSection } from "./shared/BiodataSection";
import { InfoRow } from "./shared/InfoRow";

export function MinimalModern({ data }: { data: BiodataData }) {
    if (!data.personalDetails?.fullName) return null;

    const { personalDetails, educationCareer, familyDetails, photos, partnerPreferences } = data;
    const { fullName, dateOfBirth, height, religion, city } = personalDetails;
    const { education, occupation } = educationCareer;

    // Split name
    const [firstName, ...rest] = fullName.split(" ");
    const lastName = rest.join(" ");
    const photo = photos?.[0] || null;

    return (
        <div id="biodata-preview" className="w-[210mm] min-h-[297mm] bg-white text-gray-800 shadow-lg relative font-sans overflow-hidden flex flex-col">

            {/* Header / Top */}
            <div className="bg-gray-50 p-12 pb-16 relative">
                <div className="max-w-3xl mx-auto flex items-center md:items-start gap-8 flex-col md:flex-row">
                    {/* Photo */}
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-lg overflow-hidden shadow-lg border-2 border-white flex-shrink-0">
                        {photo ? (
                            <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Photo</div>
                        )}
                    </div>
                    <div className="text-center md:text-left pt-2">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">{firstName} {lastName}</h1>
                        <p className="text-lg text-gray-500 mb-4">{occupation}</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            <span className="bg-white border px-3 py-1 rounded text-xs font-medium uppercase tracking-wider">{dateOfBirth ? new Date(dateOfBirth).getFullYear() : 'Unknown'} Born</span>
                            <span className="bg-white border px-3 py-1 rounded text-xs font-medium uppercase tracking-wider">{height}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Card Overlay */}
            <div className="flex-1 relative -mt-8 px-8 md:px-12 pb-12">
                <div className="bg-white rounded-xl shadow-sm border p-8 space-y-10 min-h-[500px]">

                    <div className="grid md:grid-cols-2 gap-12">
                        <BiodataSection title="About Me" className="md:col-span-2" titleClassName="text-black font-bold text-lg mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                                <InfoRow label="Education" value={education} className="flex flex-col text-left gap-1" labelClassName="text-xs text-gray-400 uppercase" valueClassName="font-medium" />
                                <InfoRow label="Date of Birth" value={dateOfBirth ? new Date(dateOfBirth).toDateString() : ''} className="flex flex-col text-left gap-1" labelClassName="text-xs text-gray-400 uppercase" valueClassName="font-medium" />
                                <InfoRow label="Place" value={city} className="flex flex-col text-left gap-1" labelClassName="text-xs text-gray-400 uppercase" valueClassName="font-medium" />
                                <InfoRow label="Religion" value={religion} className="flex flex-col text-left gap-1" labelClassName="text-xs text-gray-400 uppercase" valueClassName="font-medium" />
                            </div>
                        </BiodataSection>

                        <BiodataSection title="Family" titleClassName="text-black font-bold text-lg mb-4">
                            <div className="space-y-3">
                                {familyDetails?.fatherName && <InfoRow label="Father" value={familyDetails.fatherName} />}
                                {familyDetails?.motherName && <InfoRow label="Mother" value={familyDetails.motherName} />}
                                {familyDetails?.siblings && <InfoRow label="Siblings" value={familyDetails.siblings} />}
                            </div>
                        </BiodataSection>

                        <BiodataSection title="Preferences" titleClassName="text-black font-bold text-lg mb-4">
                            <div className="space-y-3">
                                {partnerPreferences?.minHeight && <InfoRow label="Min Height" value={partnerPreferences.minHeight} />}
                                {partnerPreferences?.maxAge && <InfoRow label="Max Age" value={partnerPreferences.maxAge} />}
                            </div>
                        </BiodataSection>
                    </div>

                </div>
            </div>

            <WatermarkFooter />
        </div>
    );
}
