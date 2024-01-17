
import React, { ChangeEventHandler, useState } from "react"; 

interface InputProps {
    label?: string,
    type: string,
    name?: string,
    value?: string,
    placeholder?: string, 
    background?: string,
    style?: string,
    handleChange?: ChangeEventHandler<HTMLInputElement>
}

const FormInput = ({
    label,
    type,
    name,
    value,
    placeholder,
    style,
    background,
    handleChange, 
}: InputProps) => { 
    return (
        <div className={`flex flex-col space-y-2 ${background}`}>
            <label>
                <span className="mb-8 text-xs font-medium">{label}</span>
            </label>
            <div className="relative">
                <input
                    className={`w-full px-4 h-14 border border-gray-300 focus:outline-none focus:border-[#003333] ${style}`}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                />  
            </div>
        </div>
    );
};

export default FormInput;