'use client';
import TaggedButton from "@/components/common/TaggedButton";
import { useEffect, useState } from "react";
import { sortOption } from "@/constants/SortOptions";
import ProductCard from "./ProductCard";
export default function ProductList(){
    const [keyButton, setKeyButton] = useState<string|null>('Liên quan');
    
    const [products, setProducts] = useState<number[]>(
        Array.from({ length: 12 }, (_, i) => i)
    );
    
    const [loading, setLoading] = useState(false);
    const loadMoreProduct = () => {
        if (loading) return;
        setLoading(true);

        setTimeout(() => {
            const limit = 28;
            if (products.length >= limit) {
                setLoading(false);
                return;
            }
            const addE = Array.from({ length: 8 }, (_, i) => products.length + i);
            setProducts((prev) => [...prev, ...addE]);
            setLoading(false);
        }, 600); 
    }

    useEffect(() => {
        const handleScroll = () => {  
            const position = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 10;
            if (position && !loading && products.length < 30) {
                loadMoreProduct();
            }
        };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, products]);


    return(
        <div className={`flex flex-col px-6 py-4`}>
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
                    {/* TODO:  */}
                    <span className={`text-gray-600`}>Giá: Thấp - Cao</span>
                </div>
            </div>

            <div className={`products__main mt-4 text-gray-600 flex flex-wrap gap-3`}>
                {products.map((_, idx) => (
                    <div key={idx} className={`basis-1/5 grow`}>
                        <ProductCard/>
                    </div>
                ))}
            </div>
        </div>
  );
}

