export interface Result {
    author:     Author;
    categories: Category[];
    items:      Item[];
}

export interface Author {
    name:     Name;
    lastname: Lastname;
}

export enum Lastname {
    ConfigLastname = "config.lastname",
}

export enum Name {
    ConfigFirstName = "config.firstName",
}

export enum Category {
    LibrosFísicos = "Libros Físicos",
    NoCategory = "no_category",
}

export interface Item {
    id:            string;
    title:         string;
    price:         Price;
    picture:       string;
    condition:     Condition;
    free_shipping: boolean;
    address:       Address;
}

export enum Address {
    BuenosAires = "Buenos Aires",
    CapitalFederal = "Capital Federal",
    SantaFe = "Santa Fe",
}

export enum Condition {
    New = "new",
}

export interface Price {
    currency: Currency;
    amount:   number;
    decimals: number;
}

export enum Currency {
    Ars = "ARS",
}
