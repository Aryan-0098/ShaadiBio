import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
    className?: string; // For theme overrides
    titleClassName?: string;
    icon?: ReactNode;
}

export function BiodataSection({ title, children, className = "mb-6", titleClassName = "text-[#C5A045] border-b border-[#E3D4B5]", icon }: SectionProps) {
    if (!children) return null; // Don't render empty sections

    return (
        <div className={`break-inside-avoid ${className}`}>
            <h3 className={`font-serif font-bold text-sm uppercase tracking-widest mb-3 pb-1 flex items-center gap-2 ${titleClassName}`}>
                {icon}
                {title}
            </h3>
            <div className="space-y-2">
                {children}
            </div>
        </div>
    );
}
