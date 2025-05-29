import Company from "@/types/Company";
import { useState } from "react";

export default function FooterMain(){
    const flexA = 'flex flex-col items-start';
        const [company, setCompany] = useState<Company>({
            name: 'VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY',
            taxCode: '0305094228',
            address: '13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh city, Viet Nam.',
            phone: '0283 760 7607',
            openHour: '09:00 - 22:00 from Mon-Fri'
        });
        return(
            <div className={`grid grid-cols-[3fr-auto] items-center text-black`}>
                <div className={`${flexA} space-y-2`}>
                    <h1 className={`text-lg font-bold text-blue-900 mb-2`}>{company.name}</h1>
                        <p><span className={``}>Tax:</span> {company.taxCode}</p>
                        <p><span className={``}>Address:</span> {company.address}</p>
                        <p><span className={``}>Phone number:</span> {company.phone}</p>
                        <p><span className={``}>Opening hour:</span> {company.openHour}</p>
                </div>
                <div className={`grid grid-cols-2 `}>
                    <div className={`grid grid-cols-2`}>
                        <div className={`${flexA}`}></div>
                        <div className={`${flexA}`}></div>
                    </div>
                    <div className={`flex flex-col`}>
    
                    </div>
                </div>
            </div>
        );
}