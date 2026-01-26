import { BiodataData } from "@/lib/types";
import { TheClassic } from "./TheClassic";
import { MinimalModern } from "./MinimalModern";
import { SoftFloral } from "./SoftFloral";
import { RoyalHeritage } from "./RoyalHeritage";

interface TemplateRendererProps {
    templateId: string;
    data: BiodataData;
}

export function TemplateRenderer({ templateId, data }: TemplateRendererProps) {
    switch (templateId) {
        case 'basic-modern':
        case 'classic': // Alias
            return <TheClassic data={data} />;

        case 'minimal-modern':
            return <MinimalModern data={data} />;

        case 'floral':
        case 'soft-floral':
            return <SoftFloral data={data} />;

        case 'royal':
        case 'royal-heritage':
            return <RoyalHeritage data={data} />;

        default:
            return <TheClassic data={data} />;
    }
}
