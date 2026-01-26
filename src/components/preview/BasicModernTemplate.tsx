import { Biodata } from '@/lib/types';
import { Mail, Phone, MapPin, Calendar, User, Briefcase, GraduationCap, Heart, Users } from 'lucide-react';

interface Props {
    data: Biodata;
}

export function BasicModernTemplate({ data }: Props) {
    const { personalDetails, educationCareer, familyDetails, lifestyle, partnerPreferences } = data;

    return (
        <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mx-auto p-0 flex flex-col text-sm text-gray-700 font-serif leading-relaxed relative overflow-hidden">
            {/* Decorative Top Curve */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FAF3E0] rounded-bl-full -z-0 opacity-50" />

            {/* Header */}
            <div className="px-12 pt-16 pb-8 relative z-10 text-center">
                <h1 className="text-4xl font-bold text-[#C5A045] mb-2 uppercase tracking-wide">
                    {personalDetails.fullName || 'Your Name'}
                </h1>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">Biodata for Marriage</p>

                <div className="w-16 h-1 bg-[#C5A045] mx-auto mb-8" />

                {/* Photo Placeholder */}
                <div className="w-40 h-40 mx-auto rounded-full border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center overflow-hidden mb-8">
                    {data.photos[0] ? (
                        <img src={data.photos[0]} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <User className="w-12 h-12 text-gray-300" />
                    )}
                </div>
            </div>

            {/* Content Columns */}
            <div className="px-12 flex-1 relative z-10">
                {/* Personal Details */}
                <Section title="Personal Details">
                    <Row label="Date of Birth" value={personalDetails.dateOfBirth || (personalDetails.age ? `${personalDetails.age} Years` : '')} />
                    <Row label="Time of Birth" value={personalDetails.horoscope?.birthTime} />
                    <Row label="Height" value={personalDetails.height} />
                    <Row label="Religion / Caste" value={`${personalDetails.religion} ${personalDetails.caste ? `- ${personalDetails.caste}` : ''}`} />
                    <Row label="Mother Tongue" value={personalDetails.motherTongue} />
                    <Row label="Location" value={`${personalDetails.city}, ${personalDetails.state}`} />
                </Section>

                {/* Education & Career */}
                <Section title="Education & Career">
                    <Row label="Education" value={educationCareer?.education} />
                    <Row label="Details" value={educationCareer?.educationDetail} />
                    <Row label="Occupation" value={educationCareer?.occupation} />
                    <Row label="Company" value={educationCareer?.occupationDetail} />
                    <Row label="Income" value={educationCareer?.income} />
                </Section>

                {/* Family Details */}
                <Section title="Family Details">
                    <Row label="Father" value={familyDetails.fatherName + (familyDetails.fatherOccupation ? ` (${familyDetails.fatherOccupation})` : '')} />
                    <Row label="Mother" value={familyDetails.motherName + (familyDetails.motherOccupation ? ` (${familyDetails.motherOccupation})` : '')} />
                    <Row label="Siblings" value={familyDetails.siblings} />
                    <Row label="Family Type" value={familyDetails.familyType ? `${familyDetails.familyType} Family` : ''} />
                </Section>

                {/* Footer Info */}
                <div className="mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-400 italic">
                    Created with ShaadiBio
                </div>
            </div>
        </div>
    );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    // Only render section if it has children that are not empty/null
    // (Simplification: always render for now, but in real generic we might hide)
    return (
        <div className="mb-8">
            <h3 className="text-[#C5A045] font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <span className="w-1 h-1 bg-[#C5A045] rounded-full" /> {title}
            </h3>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
}

function Row({ label, value }: { label: string, value?: string | null }) {
    if (!value) return null;
    return (
        <div className="grid grid-cols-[120px_1fr] gap-4">
            <span className="text-gray-400 font-sans text-xs uppercase tracking-wide pt-0.5">{label}</span>
            <span className="text-gray-800 font-medium">{value}</span>
        </div>
    );
}
