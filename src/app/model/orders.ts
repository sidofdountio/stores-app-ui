import { Product } from "./product-interface";

export interface Orders{
    id?:number;
    product:Product;
    quantity:number;
    amount:number;
}