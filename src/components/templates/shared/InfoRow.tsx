interface InfoRowProps {
    label: string;
    value?: string | number | null;
    className?: string;
    labelClassName?: string;
    valueClassName?: string;
}

export function InfoRow({ label, value, className = "flex justify-between text-sm", labelClassName = "text-gray-500 font-medium", valueClassName = "text-gray-900 font-semibold text-right" }: InfoRowProps) {
    if (!value) return null; // Don't render empty rows

    return (
        <div className={className}>
            <span className={labelClassName}>{label}</span>
            <span className={valueClassName}>{value}</span>
        </div>
    );
}
