import { z } from 'zod';

export const personalDetailsSchema = z.object({
    fullName: z.string().min(2, 'Full name is required (min 2 chars)'),
    gender: z.enum(['male', 'female', '']).refine(val => val !== '', 'Please select gender'),
    dateOfBirth: z.string().nullable().optional(),
    age: z.coerce.number().optional(),
    height: z.string().min(1, 'Height is required'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    motherTongue: z.string().min(2, 'Mother tongue is required'),
    religion: z.string().min(2, 'Religion is required'),
    nativePlace: z.string().optional(),
    caste: z.string().optional(),
    subcaste: z.string().optional(),
    horoscope: z.object({
        rashi: z.string().optional(),
        nakshatra: z.string().optional(),
        manglik: z.enum(['yes', 'no', 'unsure']).optional(),
        birthTime: z.string().optional(),
        birthPlace: z.string().optional(),
    }).optional(),
}).refine((data) => {
    // If Date of Birth is NOT provided, Age MUST be provided.
    if ((!data.dateOfBirth || data.dateOfBirth === '') && !data.age) return false;
    return true;
}, {
    message: "Either Date of Birth or Age is required",
    path: ["dateOfBirth"], // point error to DOB field for now
});

export const educationCareerSchema = z.object({
    education: z.string().min(2, 'Education qualification is required'),
    occupation: z.string().min(2, 'Occupation is required'),
    educationDetail: z.string().optional(),
    occupationDetail: z.string().optional(),
    income: z.string().optional(),
});

export const familyDetailsSchema = z.object({
    fatherName: z.string().optional(),
    fatherOccupation: z.string().optional(),
    motherName: z.string().optional(),
    motherOccupation: z.string().optional(),
    siblings: z.string().optional(),
    familyType: z.string().optional(),
    familyStatus: z.string().optional(),
    aboutFamily: z.string().optional(),
});

// Other steps are fully optional, so generic schema often suffices or specific rules if needed.
export const lifestyleSchema = z.object({
    diet: z.string().optional(),
    smoke: z.string().optional(),
    drink: z.string().optional(),
});

export const partnerPreferencesSchema = z.object({
    expectations: z.string().optional(),
});

// Map step to schema
export const stepSchemas = {
    personal: personalDetailsSchema,
    education: educationCareerSchema,
    family: familyDetailsSchema,
    lifestyle: lifestyleSchema,
    preferences: partnerPreferencesSchema,
    photos: z.any(),
    review: z.any(),
    download: z.any(),
};
