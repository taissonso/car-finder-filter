export interface SelectInputProps {
    label: string;
    htmlFor: string;
    value: string;
    brands: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
