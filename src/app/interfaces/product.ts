export interface IProduct {
    _id?: number | string;
    name: string;
    price: number | string;
    descrition: string;
    createdAt?: string;
    updatedAt?:string;
}