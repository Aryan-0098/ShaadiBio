import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
    {
        question: "Is this biodata maker free?",
        answer: "Yes! You can create and download a watermarked PDF version of your marriage biodata securely for free. We also offer a premium option for high-quality, watermark-free downloads."
    },
    {
        question: "Can I add my photo to the biodata?",
        answer: "Absolutely. Our builder allows you to upload up to 3 photos. We automatically crop and format them to look professional in your selected template."
    },
    {
        question: "What information should I include?",
        answer: "A standard marriage biodata includes Personal Details, Education & Career, Family Background, and Partner Preferences. Our step-by-step builder guides you through all these sections."
    },
    {
        question: "Can I edit my biodata after downloading?",
        answer: "Yes, your data is saved locally on your device. You can come back anytime, make edits, and download the updated PDF instantly."
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500">Everything you need to know about creating your marriage biodata.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {FAQS.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4 bg-gray-50/50">
                            <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-[#C5A045] hover:no-underline py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
