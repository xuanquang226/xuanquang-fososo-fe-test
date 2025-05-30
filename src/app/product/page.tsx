import MainBanner from "@/components/banner/MainBanner";
import FilterSidebar from "@/components/sidebar/FilterSideBar";
import ProductList from "@/components/product/ProductList";
import CategoryMenuPopup from "@/components/popup/CategoryMenuPopup";
export default function Product(){
    return(
        <div className={`flex flex-col gap-5 w-4/5 h-auto mx-auto`}>
            <MainBanner/>
            <div className={`grid grid-cols-[2fr_7fr]`}>
                <FilterSidebar/>
                <ProductList/>
                <CategoryMenuPopup/>
            </div>
        </div>
    )
}