
import React from "react";
import { SelectInputProps } from "../types";

const SelectInput: React.FC<SelectInputProps> = ({
    label,
    htmlFor,
    value,
    brands,
    onChange
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-black text-[16px]/[22px] font-medium text-center" htmlFor={htmlFor}>{label}</label>
            <div className="relative">
                <select
                    id={htmlFor}
                    className="w-full bg-white border border-[#edecf2] rounded-[4px] py-4 px-3 text-black text-[16px]/[22px] font-medium appearance-none pr-12 capitalize"
                    value={value}
                    onChange={onChange}
                >
                    <option value="todos">Todas</option>
                    {brands.map(brand => (
                        <option className="capitalize" key={brand} value={brand.toLowerCase()}>
                            {brand}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SelectInput;