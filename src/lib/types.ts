export type Step =
    | 'personal'
    | 'education'
    | 'family'
    | 'lifestyle'
    | 'preferences'
    | 'photos'
    | 'review'
    | 'download';

export interface Biodata {
    personalDetails: {
        fullName: string;
        gender: 'male' | 'female' | '';
        dateOfBirth: string | null; // stored as ISO string or null
        age?: number; // fallback if DOB not used (Phase 1 req: mutual exclusivity)
        height: string;
        city: string;
        state: string;
        nativePlace?: string;
        motherTongue: string;
        religion: string;
        caste?: string;
        subcaste?: string;
        horoscope?: {
            rashi?: string;
            nakshatra?: string;
            manglik?: 'yes' | 'no' | 'unsure';
            birthTime?: string; // HH:MM AM/PM
            birthPlace?: string;
        };
    };
    educationCareer: {
        education: string;
        educationDetail?: string; // e.g. college name
        occupation: string;
        occupationDetail?: string; // e.g. company name
        income?: string;
    };
    familyDetails: {
        fatherName?: string;
        fatherOccupation?: string;
        motherName?: string;
        motherOccupation?: string;
        siblings?: string; // free text for now, or count
        familyType?: string; // atomic or nuclear etc
        familyStatus?: string; // middle class etc
        aboutFamily?: string;
    };
    lifestyle?: {
        diet?: 'veg' | 'non_veg' | 'jain' | 'eggetarian' | '';
        smoke?: 'no' | 'yes' | 'occasionally' | '';
        drink?: 'no' | 'yes' | 'occasionally' | '';
        hobbies?: string[];
    };
    partnerPreferences?: {
        ageRange?: [number, number]; // [min, max]
        heightRange?: [string, string];
        maritalStatus?: string;
        religion?: string;
        caste?: string;
        education?: string;
        occupation?: string;
        location?: string;
        expectations?: string; // free text
    };
    photos: string[]; // array of base64 or object URLs
}

export interface Template {
    id: string;
    name: string;
    thumbnail: string; // path to image
    componentName: string; // for dynamic lookup (BasicModernTemplate)
    premium: boolean;
}

export const TOOLS_STEPS: { id: Step; label: string; path: string }[] = [
    { id: 'personal', label: 'Personal Details', path: '/builder' },
    { id: 'education', label: 'Education & Career', path: '/builder?step=education' },
    { id: 'family', label: 'Family Details', path: '/builder?step=family' },
    { id: 'lifestyle', label: 'Lifestyle', path: '/builder?step=lifestyle' },
    { id: 'preferences', label: 'Partner Preferences', path: '/builder?step=preferences' },
    { id: 'photos', label: 'Photos', path: '/builder?step=photos' },
    { id: 'review', label: 'Review', path: '/builder?step=review' },
    { id: 'download', label: 'Download', path: '/builder?step=download' },
];

export const INITIAL_BIODATA: Biodata = {
    personalDetails: {
        fullName: '',
        gender: '',
        dateOfBirth: null,
        height: '',
        city: '',
        state: '',
        motherTongue: '',
        religion: 'Hindu', // Default
    },
    educationCareer: {
        education: '',
        occupation: '',
    },
    familyDetails: {},
    photos: [],
};
