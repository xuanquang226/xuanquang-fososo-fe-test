import Link from "next/link";
import styles from "@/styles/NavbarBottom.module.css";
import { useCategoryPopupStore } from "@/state/CategoryPopupStore";

export default function NavbarBottom(){
    const { open, close } = useCategoryPopupStore();
    return(
        <div className={`navbar-bottom w-4/5 my-0 mx-auto grid grid-cols-2 items-center text-black`}>
            <div className={`navbar-bottom__left flex justify-start items-center gap-3`}>
                <div 
                    onMouseEnter={open}
                    onMouseLeave={close}
                    className={`navbar-bottom__dropdown-menu text-white flex items-center
                                shadow-lg px-3 py-2 hover:cursor-pointer hover:bg-sky-400 duration-200 bg-dropdown-menu rounded-sm gap-2
                                group`}>   
                    <img className={`inline-block`} src="/images/hamburger-menu.png" alt="" />
                    <span>Danh Mục Sản Phẩm</span>
                    <img className={`inline-block h-1/3 w-auto ml-1
                                    transform transition-transform duration-200
                                    group-hover:-rotate-z-90`} src="/images/arrow.png" alt="" />
                </div>
                <Link href="#">Về chúng tôi</Link>
                <Link href="#">Bài viết</Link>
                <Link href="#">Catalog</Link>
                <Link href="#">Liên hệ</Link>
            </div>
            <div className={`${styles['navbar-bottom__right']} flex justify-end gap-2`}>
                <div>
                    <img src="/images/clock.png" alt="" />
                    <span>Hỗ trợ 24/7</span>
                </div>
                <div>
                    <img src="/images/clock.png" alt="" />
                    <span>Miễn phí vận chuyển</span>
                </div>
                <div>
                    <img src="/images/truck.png" alt="" />
                    <span>Giao hàng nhanh 2h</span>
                </div>
                <div>
                    <img src="/images/subtract.png" alt="" />
                    <span>30 ngày đổi trả</span>
                </div>    
            </div>
        </div>
    )
}