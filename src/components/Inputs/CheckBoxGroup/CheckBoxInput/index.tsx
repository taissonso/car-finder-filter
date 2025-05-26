import React from "react";
import { CheckBoxInputProps } from "../../types";
const CheckBoxInput: React.FC<CheckBoxInputProps> = ({
    label,
    id,
    checked,
    onChange,
    className = "",
}) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                className="peer w-4 h-4 rounded border-[#edecf2] "
            />
            <label
                htmlFor={id}
                className="peer text-[#6A6977] text-[18px]/[22px] font-normal cursor-pointer peer-checked:text-black "
            >
                {label}
            </label>
        </div>
    );
};

export default CheckBoxInput;