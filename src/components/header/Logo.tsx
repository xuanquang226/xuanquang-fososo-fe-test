import Link from "next/link";

export default function Logo(){
    return(
        <Link href="#" className={`w-fit h-fit`}>
            <img src="/images/logo.png" alt="" />
        </Link>
    );
}