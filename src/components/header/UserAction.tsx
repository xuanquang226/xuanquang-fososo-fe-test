import Link from "next/link";

export default function UserAction(){
    return(
        <div className={`flex flex-end justify-between items-center`}>
            <Link href="#">
                <img className={`inline-block pr-1`} src="/images/vietnam.png" alt="" />
                <span>VI</span>
            </Link>
            <Link href="#">
                <img className={`inline-block pr-1`}src="/images/cart.png" alt="" />
                <span>Giỏ hàng</span>
            </Link>
            <Link href="#">
                <img className={`inline-block pr-1`}src="/images/user.png" alt="" />
                <span>Tài khoản</span>
            </Link>
        </div>
    );
}