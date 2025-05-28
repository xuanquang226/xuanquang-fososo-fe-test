'use client';
import Product from "@/types/Product";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function ProductCard(){

    const [discount, setDiscount] = useState<number>(0);
    const [currentPrice, setCurrentPrice] = useState<string>('');
    const [originalPrice, setOriginalPrice] = useState<string>('');
    const [product, setProduct] = useState<Product>({
        id: 1,
        name: 'Lọc gió động cơ',
        description: 'Giá cực sốc',
        idCategory: 1,
        currentPrice: '229000',
        originalPrice: '359000',
        quantity: 10,
        imageDTOs: [],
        quantitySold: 5,
        createdDate: "2024-05-27T10:30:00Z",
    });



    useEffect(() => {
        setDiscount(handleDiscount(product));
    }, [product.currentPrice, product.originalPrice]);

    useEffect(() => {
        const priceMap = new Map<number, string>();
        priceMap.set(1, product.currentPrice);
        priceMap.set(2, product.originalPrice)

        const priceMapAfterHandle = handlePrice(priceMap);
        setCurrentPrice(priceMapAfterHandle.get(1) ?? '');
        setOriginalPrice(priceMapAfterHandle.get(2) ?? '');
    }, [product.currentPrice, product.originalPrice]);

    

    return(
        <div className={`product-card p-4 flex flex-col bg-white text-black 
                        w-full h-auto gap-1/10 rounded-2xl shadow-md hover:cursor-pointer
                        transform transition-transform hover:-translate-y-1`}>
            <div className={`product-card__image`}>
                <img src="/images/product-a.png" alt="" />
            </div>
            <div className={`product-card__info flex flex-col gap-2`}>
                <Link href="#" className={`product-card__info__discount w-fit h-auto 
                                        flex gap-1 items-center px-1
                                        text-badge-text font-bold text-sm 
                                        bg-linear-to-r from-badge-left to-badge-right rounded-3xl`}>
                    <img className={`h-1/2 w-auto bg-white border-white border-2 rounded-xl`} src="/images/flame.png" alt="" />
                    <p>{product.description}</p>
                </Link>
                <h3 className={`product-card__info__title font-bold`}>{product.name}</h3>
            </div>
            <div className={`product-card__price flex flex-col gap-2`}>
                <div className={`product-card__price__discount flex gap-1 text-red-600 text-md font-bold`}>
                    <p>{currentPrice}</p>
                    <p className={`underline`}>đ</p>
                </div>
                <div className={`product-card__price__original flex gap-1 text-xs font-extralight`}>
                    <p className={`line-through`}>{originalPrice}</p>
                    <p className={`underline`}>đ</p>
                    <p className={`pl-2 text-red-600`}>-{discount}%</p>
                </div>
                <button className="w-4/5 h-auto mx-auto 
                        bg-skyline text-blue-700 font-bold text-base px-4 py-2 rounded 
                        hover:bg-blue-200 hover:cursor-pointer transition duration-200">Mua ngay</button>
            </div>
        </div>
    );
}

function handleDiscount(product: Product): number{
    const currentPrice:number = Number(product.currentPrice);
    const originalPrice:number = Number(product.originalPrice);
    if(currentPrice === originalPrice){
        return 0;
    }
    const discount:number = Number((((originalPrice - currentPrice) / originalPrice) * 100).toFixed(1));
    return discount;
}

function handlePrice(priceMap: Map<number, string>): Map<number, string>{
    const result = new Map<number, string>();
    priceMap.forEach((value, key) => {
        const numeric = Number(value);
        const formatted = numeric.toLocaleString('en-US');
        result.set(key, formatted);
    });
    return result;
}

