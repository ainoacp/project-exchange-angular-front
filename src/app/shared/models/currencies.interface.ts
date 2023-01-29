export interface Currencies {
    iso:string;
    rate:number;
    exchange:number;
}

export interface Currency {
    date:string;
    base:string;
    amount:number;
    isos: Currencies[];
}

export interface Value {
    value:number;
}