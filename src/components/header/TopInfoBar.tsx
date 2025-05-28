import Link from "next/link";

export default function TopInfoBar(){
    return(
        <div className={`top-info-bar w-screen h-6 bg-linear-to-l from-left via-center to-right`}>
            <div className={`top-info-content w-4/5 h-full
                            my-0 mx-auto flex`}>
                <div className={`top-info-left-content basis-1/2 flex flex-row items-center text-base justify-start`}>
                    <img className={`pr-2`} src="/images/sale.png" alt="" />
                    <p className={``}>Nhập mã <span className={`font-bold text-amber-300`}>NEWBIE</span> giảm ngay 10% cho lần đầu tiên</p>
                </div>
                <div className={`top-info-right-content basis-1/2 flex flex-row gap-2 items-center justify-end`}>
                    <img className={``} src="/images/phone.png" alt="" />
                    <p>Hot line: <span className={`font-bold text-amber-300`}>0283 760 7607</span></p>
                    <img className={`pl-2`} src="/images/smartphone-2.png" alt=""/>
                    <Link href="#" >Tải ứng dụng</Link>                   
                </div>
            </div>
        </div>
    )
}