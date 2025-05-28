'use client';
import TaggedButton from "@/components/TaggedButton";
import { useState } from "react";
import { sortOption } from "@/constants/SortOptions";
export default function ProductList(){
    const [keyButton, setKeyButton] = useState<string|null>(null);
    return(
        <div className={`flex flex-col bg-white px-6 py-4`}>
            <div className={`products__top grid grid-cols-[1fr_auto] items-center gap-4`}>
                <h3 className={`text-sm font-semibold text-gray-900`}>Danh sách sản phẩm</h3>
                <div className={`flex items-center gap-4 text-sm text-gray-700`}>
                    <span className={`text-gray-600`}>Sắp xếp theo</span>
                    <div className={`flex gap-2`}>
                        {sortOption.map((option) => {
                            const isActive = keyButton === option.value;
                            return(
                            <TaggedButton onClick={() => setKeyButton(option.value)} 
                                key={option.value} 
                                label={option.value}
                                active={isActive}/>
                        )})}
                    </div>
                    <span className={`text-gray-600`}>Giá: Thấp → Cao</span>
                </div>
            </div>

            <div className={`products__main mt-4`}>

            </div>
        </div>
  );
}