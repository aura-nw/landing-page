import React, { useEffect, useRef, useState } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    selectedOption: string;
    onSelect: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<any>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div ref={selectRef} className="relative inline-block w-full text-gray-700">
            <div
                className="rounded-lg w-full p-4 flex justify-between items-center bg-[#F0F3F5] xl:hidden"
                onClick={toggleOpen}
            >
                <span className="text-[#1c1f2a] text-xl font-semibold font-interTight leading-7">{selectedOption}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7.5L10 12.5L5 7.5" stroke="#968C7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {isOpen && (
                <div className="absolute mt-2 w-full section-menu lg:flex xl:flex flex-col border border-[#F0F3F5] bg-[#F0F3F5] p-6 rounded-lg xl:h-fit xl:min-w-[340px] xl:sticky xl:top-[140px]">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className="content_link flex flex-col py-1 border-l-[#292521]"
                            onClick={() => { onSelect(option.value); setIsOpen(false); }}
                        >
                            <span className="text-[#1c1f2a] font-interTight text-base font-normal leading-8">{option.label}</span>
                        </div >
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
