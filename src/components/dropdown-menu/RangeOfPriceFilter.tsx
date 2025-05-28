'use client';
import { useState } from "react";
import { rangePriceOptions } from "@/constants/RangePriceOptions";
export default function RangeOfPriceFilter(){
    
    const [open, setOpen] = useState<boolean>(true);
    const [selectedRange, setSelectedRange] = useState<string | null>(null);

    return(
        <div className={`p-4 border-b-2 border-b-gray-300 w-full`}>
            <div onClick={() => setOpen(!open)} 
                className={`flex justify-between items-center cursor-pointer`}>
                <h3 className={`font-bold`}>Khoảng giá</h3>
                <img src="/images/arrow-top.png" className={`${open ? '' : 'rotate-180'} transition-transform`} alt="" />
            </div>
            {open && (
                <div className={`flex flex-col mt-2 space-y-2 text-base font-light`}>
                    {rangePriceOptions.map((option) => {
                        const isActive = selectedRange === option.value;
                        return(
                        <button key={option.value}
                                onClick={() => setSelectedRange(option.value)}
                                className={`border-2 rounded-sm
                                            hover:cursor-pointer hover:bg-gray-200
                                            transition-transform duration-200 ease-in-out
                                            ${isActive ? 'text-blue-500 border-blue-500 font-bold' 
                                            : 'border-gray-300'}`}>{option.value}
                            <span className={`ml-1 underline`}>đ</span>
                        </button>
                    )})}
                </div>
            )}
        </div>
    );
}