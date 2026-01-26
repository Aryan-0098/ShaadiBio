'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBiodataStore } from '@/lib/store';
import { educationCareerSchema, familyDetailsSchema } from '@/lib/validation/schemas';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// A mapped object to get schema and keys dynamically could be cleaner, 
// but for explicit clarity I'll create separate components or a robust dynamic one.
// Let's create specific forms to avoid complexity.

export function EducationForm({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const { biodata, updateBiodata } = useBiodataStore();

    const form = useForm({
        resolver: zodResolver(educationCareerSchema),
        defaultValues: biodata.educationCareer as unknown as z.infer<typeof educationCareerSchema>,
        mode: 'onChange'
    });

    useEffect(() => {
        const sub = form.watch((val) => updateBiodata('educationCareer', val));
        return () => sub.unsubscribe();
    }, [form, updateBiodata]);

    return (
        <div className="max-w-xl mx-auto py-8 px-4">
            <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-[#2A2A2A] border-l-4 border-[#C5A045] pl-4">Education & Career</h2>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
                    <FormField name="education" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Highest Qualification</FormLabel><FormControl><Input placeholder="B.Tech Computer Science" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="educationDetail" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>College / University (Optional)</FormLabel><FormControl><Input placeholder="IIT Bombay" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="occupation" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Occupation</FormLabel><FormControl><Input placeholder="Software Engineer" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="occupationDetail" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Company Name (Optional)</FormLabel><FormControl><Input placeholder="Google" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="income" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Annual Income (Optional)</FormLabel><FormControl><Input placeholder="15 LPA" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                    )} />

                    <div className="pt-8 flex justify-between">
                        <Button type="button" variant="outline" onClick={onBack}>← Back</Button>
                        <Button type="submit" className="bg-[#C5A045] hover:bg-[#B39035] text-white">Next: Family Details →</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export function FamilyDetailsForm({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const { biodata, updateBiodata } = useBiodataStore();

    const form = useForm({
        resolver: zodResolver(familyDetailsSchema),
        defaultValues: biodata.familyDetails as unknown as z.infer<typeof familyDetailsSchema>,
        mode: 'onChange'
    });

    useEffect(() => {
        const sub = form.watch((val) => updateBiodata('familyDetails', val));
        return () => sub.unsubscribe();
    }, [form, updateBiodata]);

    return (
        <div className="max-w-xl mx-auto py-8 px-4">
            <div className="mb-8"><h2 className="text-2xl font-serif font-bold text-[#2A2A2A] border-l-4 border-[#C5A045] pl-4">Family Details</h2></div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField name="fatherName" control={form.control} render={({ field }) => (
                            <FormItem><FormLabel>Father&apos;s Name</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                        )} />
                        <FormField name="fatherOccupation" control={form.control} render={({ field }) => (
                            <FormItem><FormLabel>Father&apos;s Occupation</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                        )} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <FormField name="motherName" control={form.control} render={({ field }) => (
                            <FormItem><FormLabel>Mother&apos;s Name</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                        )} />
                        <FormField name="motherOccupation" control={form.control} render={({ field }) => (
                            <FormItem><FormLabel>Mother&apos;s Occupation</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
                        )} />
                    </div>
                    <FormField name="siblings" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Siblings</FormLabel><FormControl><Input placeholder="1 Brother, 1 Sister" {...field} /></FormControl></FormItem>
                    )} />
                    <FormField name="familyType" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Family Type</FormLabel><FormControl><Input placeholder="Nuclear / Joint" {...field} /></FormControl></FormItem>
                    )} />

                    <div className="pt-8 flex justify-between">
                        <Button type="button" variant="outline" onClick={onBack}>← Back</Button>
                        <Button type="submit" className="bg-[#C5A045] hover:bg-[#B39035] text-white">Next: Lifestyle →</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
