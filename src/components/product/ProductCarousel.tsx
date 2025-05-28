'use client';
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
    const products = [...Array(14)];
    const itemsVisible:number = 5;
    const step:number = 2;

    const [index, setIndex] = useState<number>(0);
    const maxIndex = Math.max(0, Math.ceil((products.length - itemsVisible) / step));

    const handleNext = () => {
        if (index < maxIndex) setIndex(index + 1);
    };
    const handlePrev = () => {
        if (index > 0) setIndex(index - 1);
    };
    
    const translateX = -(index * step * 100) / itemsVisible;

    return (
        <div className="relative w-full overflow-hidden">
            <button onClick={handlePrev}
                    className={`w-9 h-9 flex items-center justify-center absolute top-1/2 left-2 
                                transform -translate-y-1/2 z-50 bg-skyline-b rounded-full shadow-md`}>
                <img src="/images/left-arrow.png" alt="" />
            </button>
            <div className={`w-full overflow-hidden`}>
                <ul style={{ transform: `translateX(${translateX}%)` }}
                    className={`flex transition-transform duration-500 ease-in-out`}>
                    {products.map((_, idx) => (
                        <li key={idx}
                            className={`shrink-0 px-2`}
                            style={{ width: `${100 / itemsVisible}%` }}>
                            <ProductCard />
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleNext}
                    className={`w-9 h-9 flex items-center justify-center absolute top-1/2 right-2 
                                transform -translate-y-1/2 z-50 bg-skyline-b rounded-full shadow-md`}>
                <img src="/images/right-arrow.png" alt="" />
            </button>
        </div>
    );
}


