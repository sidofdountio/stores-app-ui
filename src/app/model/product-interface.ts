export interface Product{
    id?:number;
    name:String;
    imageUrl:String;
    price:Number | null | undefined;
    isFavorite?:Boolean
}