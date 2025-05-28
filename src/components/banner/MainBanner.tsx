import ProductCarousel from "@/components/product/ProductCarousel";
export default function MainBanner(){
    return(
       <div className={`flex flex-col bg-banner rounded-2xl`}>
            <img className={`w-full h-auto rounded-t-2xl`} src="/images/banner.png" alt="" />
            <div className={`overflow-hidden p-2`}>
                <ProductCarousel />
            </div>
        </div>
    );
}