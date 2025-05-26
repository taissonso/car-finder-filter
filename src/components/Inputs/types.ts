export interface SelectInputProps {
    label: string;
    htmlFor: string;
    value: string;
    brands: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface CheckBoxGroupProps {
    title: string;
    options: string[];
    selectedOptions: string[];
    setSelectedOptions: (options: string[]) => void;
    className?: string;
}

export interface CheckBoxInputProps {
    label: string;
    id: string;
    checked: boolean;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
