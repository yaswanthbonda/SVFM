/**
 * Created by ybonda on 6/11/19.
 */
export class Product {
    productId: number;
    name: string;
    displayName: string;
    description: string;
    image: string;
    productUses: string;
    mrp: number;
    discountInRs: number;
    finalPrice: number;
    tags: Array<string>
}