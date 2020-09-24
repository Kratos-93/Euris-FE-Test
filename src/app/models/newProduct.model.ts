export interface NewProductModel {
    title: string;
    category: string;
    price: number;
    employee: string;
    description: string;
    required?: true;
    validationError?: string;
}
