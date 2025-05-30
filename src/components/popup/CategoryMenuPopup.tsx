'use client';
import { useState } from "react";
import Link from "next/link";
import ProductCard from "../product/ProductCard";
import CategoryItem from "../common/CategoryItem";
import {initCategories} from "@/constants/Categories";
import { useCategoryPopupStore } from "@/state/CategoryPopupStore";

export default function CategoryMenuPopup() {
  const [activeId, setActiveId] = useState(1);
  const products = [...Array(5)];
  const categoryItems = [...Array(6)];

  const { isOpen, close, open } = useCategoryPopupStore();

  if (!isOpen) return null;

  return (
    <div 
        onMouseEnter={open}
        onMouseLeave={close}
        className={`flex gap-2 bg-body w-[1150px] absolute top-46 z-50`}>
      <div className={`w-1/4 bg-white shadow-lg border rounded-lg`}>
        {initCategories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <div key={cat.id}
                onMouseEnter={() => setActiveId(cat.id)}
                className={`flex items-center justify-between p-4 cursor-pointer transition-all ${
                isActive
                  ? "bg-blue-100 border-l-4 border-blue-500 font-semibold text-blue-700"
                  : "hover:bg-gray-100 text-black"
              }`}>
              <div className={`flex items-center space-x-3`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={`w-10 h-10 object-contain`}
                />
                <span>{cat.name}</span>
              </div>
              <img src="/images/arrow2.png" alt="" />
            </div>
          );
        })}
      </div>

      <div style={{ width: "calc(75%)" }}>
        <div className={`flex flex-wrap gap-2`}>
          {categoryItems.map((__, idx) => (
            <div key={idx} className={`grow basis-[30%]`}>
              <CategoryItem />
            </div>
          ))}
        </div>

        <div className={`border border-gray-300 my-4`}></div>

        <div className={`flex my-2 justify-between`}>
          <h2 className={`font-semibold text-black`}>Sản phẩm bán chạy</h2>
          <Link href="#" className={`text-sky-500`}>
            Xem tất cả
          </Link>
        </div>

        <div className={`grid grid-cols-5 gap-2`}>
          {products.map((__, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
