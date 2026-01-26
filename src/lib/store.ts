import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Biodata, INITIAL_BIODATA, Step } from './types';

interface BiodataState {
    biodata: Biodata;
    currentStep: Step;
    selectedTemplateId: string;

    // Actions
    updateBiodata: (section: keyof Biodata, data: Partial<Biodata[keyof Biodata]>) => void;
    updateNestedField: (section: keyof Biodata, field: string, value: any) => void;
    setStep: (step: Step) => void;
    setTemplate: (id: string) => void;
    resetDraft: () => void;
}

export const useBiodataStore = create<BiodataState>()(
    persist(
        (set) => ({
            biodata: INITIAL_BIODATA,
            currentStep: 'personal',
            selectedTemplateId: 'basic-modern', // Default

            updateBiodata: (section, data) =>
                set((state) => ({
                    biodata: {
                        ...state.biodata,
                        [section]: {
                            ...state.biodata[section],
                            ...data,
                        },
                    },
                })),

            updateNestedField: (section, field, value) =>
                set((state) => ({
                    biodata: {
                        ...state.biodata,
                        [section]: {
                            ...state.biodata[section],
                            [field]: value
                        }
                    }
                })),

            setStep: (step) => set({ currentStep: step }),
            setTemplate: (id) => set({ selectedTemplateId: id }),
            resetDraft: () => set({ biodata: INITIAL_BIODATA, currentStep: 'personal' }),
        }),
        {
            name: 'shaadibio-storage', // unique name
        }
    )
);
