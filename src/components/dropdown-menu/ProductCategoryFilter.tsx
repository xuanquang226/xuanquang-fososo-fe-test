'use client'
import { useState } from "react";
import { productCategoryOptions } from '@/constants/ProductCategoryOptions';

export default function ProductCategoryFilter(){
  const [selected, setSelected] = useState<string[]>(['air_filter','fuel_filter','oil_filter']);
  const [open, setOpen] = useState<boolean>(true);

  const toggleSelection = (value: string) => {
    setSelected((prev) => prev.includes(value) 
    ? prev.filter((v) => v !== value): [...prev, value]);   
  };

  return (
    <div className={`p-4 border-b-2 border-b-gray-300 w-full`}>
      <div className={`flex justify-between items-center cursor-pointer`} onClick={() => setOpen(!open)}>
        <h3 className={`font-bold`}>Danh mục sản phẩm</h3>
        <img src="/images/arrow-top.png" className={`${open ? '' : 'rotate-180'} transition-transform`} alt=""/>
      </div>
      {open && (
        <ul className={`mt-2 space-y-2 text-base font-light `}>
          {productCategoryOptions.map((item) => (
            <li key={item.value} className="flex items-center space-x-2">
              <input type="checkbox"
                    checked={selected.includes(item.value)}
                    onChange={() => toggleSelection(item.value)}
                    className={`accent-blue-600 w-4 h-4`}/>
              <span>{item.label}</span>
              <span className="ml-auto text-gray-400">({item.count})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}