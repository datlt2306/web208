export interface IStudent {
    name: string,
    age: number,
    imageUrl: string,
    status: boolean,
    address: {
        street: string,
        city: string,
        state: string
    }
}