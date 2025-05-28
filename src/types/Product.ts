import Image from "./Image";


export default interface Product{
    id: number;
    name: string;
    description: string;
    idCategory: number;
    currentPrice: string;
    originalPrice: string;
    quantity:number;
    imageDTOs: Image[];
    quantitySold: number;
    createdDate: string;
}