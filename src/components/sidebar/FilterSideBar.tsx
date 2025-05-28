import MultiDropdownFilterGroup from "../dropdown-menu/MultiDropdownFilterGroup";
import ProductCategoryFilter from "../dropdown-menu/ProductCategoryFilter";
import RangeOfPriceFilter from "../dropdown-menu/RangeOfPriceFilter";

export default function FilterSidebar(){
    return(
        <div className={`flex flex-col space-y-2 text-black w-full`}>
            <ProductCategoryFilter/>
            <RangeOfPriceFilter/>
            <MultiDropdownFilterGroup/>
        </div>
    );
}