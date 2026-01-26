'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBiodataStore } from '@/lib/store';
import { personalDetailsSchema } from '@/lib/validation/schemas';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Biodata } from '@/lib/types';

import { z } from 'zod';

export function PersonalDetailsForm({ onNext }: { onNext: () => void }) {
    const { biodata, updateBiodata } = useBiodataStore();

    type FormValues = z.infer<typeof personalDetailsSchema>;

    const form = useForm({
        resolver: zodResolver(personalDetailsSchema),
        defaultValues: biodata.personalDetails as any,
        mode: 'onChange',
    });

    // Autosave: Watch for changes and update store
    useEffect(() => {
        const subscription = form.watch((value) => {
            // @ts-ignore - partial update is safe here
            updateBiodata('personalDetails', value);
        });
        return () => subscription.unsubscribe();
    }, [form, updateBiodata]);

    const onSubmit = () => {
        onNext();
    };

    return (
        <div className="max-w-xl mx-auto py-8 px-4">
            <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-[#2A2A2A] border-l-4 border-[#C5A045] pl-4">Personal Details</h2>
                <p className="text-muted-foreground mt-2 pl-5">Let's start with the basics for your biodata.</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Aditya Roy" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="height"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Height</FormLabel>
                                    <FormControl>
                                        {/* Simple Text for now, could be Select */}
                                        <Input placeholder="5 ft 9 in" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date of Birth</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} value={field.value || ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>OR Age</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="25"
                                            {...field}
                                            // Handle number coercion manually if needed, or rely on zod coerce
                                            onChange={e => field.onChange(e.target.valueAsNumber)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Mumbai" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>State</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Maharashtra" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="motherTongue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mother Tongue</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Hindi" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="religion"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Religion</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Hindu">Hindu</SelectItem>
                                            <SelectItem value="Muslim">Muslim</SelectItem>
                                            <SelectItem value="Sikh">Sikh</SelectItem>
                                            <SelectItem value="Christian">Christian</SelectItem>
                                            <SelectItem value="Jain">Jain</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="caste"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Caste</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Brahmin" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subcaste"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Subcaste (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Optional" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="pt-8 flex justify-end">
                        <Button type="submit" size="lg" className="bg-[#C5A045] hover:bg-[#B39035] text-white min-w-[200px]">
                            Next: Education & Career →
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
