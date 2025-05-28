import Link from "next/link";
import { Button } from "react-bootstrap";

export default function SearchBar(){
    return(
        <div className={`search-bar border-blue-400 border-2 rounded-2xl 
                        grid grid-cols-[4fr_1fr] h-12 w-full bg-white 
                        items-center`}>
            <div className={`pl-4`}>
                <input className={`text-base text-gray-700 w-full border-none outline-none`} type="text" placeholder="Tìm sản phẩm ..." />
            </div>
            <div className={`search-bar-right-content flex gap-2 justify-around`}>
                <Link href="#" className={`flex items-center justify-center`}>
                    <img className={`h-2/3 w-auto`} src="/images/camera.png" alt="" />
                </Link>
                <div className={`button-search-custom bg-button-search rounded-3xl w-15 h-9 flex justify-center `}>
                    <Button className={`cursor-pointer`}>
                        <img className={`h-2/3 w-auto`} src="/images/search.png" alt="" />
                    </Button>  
                </div>
            </div>
        </div>
    );
}