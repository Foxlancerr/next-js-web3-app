export const enum EStatus {
    PENDING = 'pending',
    COMPLETE = 'complete',
    CLOSE = 'close'
}
export interface IProduct {
    id: number,
    "Product Name": string,
    category: string,
    price: number,
    status: EStatus,
}

