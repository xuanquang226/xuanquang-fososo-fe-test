import Link from "next/link";

export default function CategoryItem(){
    return(
        <div className={`border bg-white rounded-lg shadow-md`}>
            <Link href="#" className={`flex items-center space-x-4 p-2`}>
                <img src="/images/bo-loc-gio.png" alt="" />
                <p className={`text-black font-semibold`}>Bộ lọc gió</p>
            </Link>
        </div>
    );
}