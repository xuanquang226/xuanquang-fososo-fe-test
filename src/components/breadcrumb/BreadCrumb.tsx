'use client';
import { useState } from "react";

export default function BreadCrumb(){
    const [location, setLocation] = useState<string>("Sản phẩm"); 
    return(
        <div className={`flex gap-5 w-4/5 py-5 mx-auto items-center text-breadcrumb`}>
            <span>Trang chủ</span>
            <img className={`h-1/2 w-auto`} src="/images/arrow2.png" alt="" />
            <span className={`text-sky-800 font-bold`}>{location}</span>
        </div>
    );
}