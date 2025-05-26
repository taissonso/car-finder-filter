import React from "react";
import CheckBoxInput from "./CheckBoxInput";
import { CheckBoxGroupProps } from "../types";

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
    title,
    options,
    selectedOptions,
    setSelectedOptions,
    className = "",
}) => {

    const handleOptionChange = (option: string) => {
        if (selectedOptions.includes(option)) {
            // Se já estiver selecionado, remove
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            // Se não estiver selecionado, adiciona
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div className={`${className}`}>
            <p className="text-black text-[16px]/[22px] font-medium mb-3 text-center">{title}</p>
            {options.map((option) => (
                <CheckBoxInput
                    key={option}
                    label={option.charAt(0).toUpperCase() + option.slice(1)} // Primeira letra maiúscula
                    id={`${title.toLowerCase()}-${option}`}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                    className="mb-2"
                />
            ))}
        </div>
    );
};

export default CheckBoxGroup;