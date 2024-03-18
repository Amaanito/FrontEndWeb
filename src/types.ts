export interface Product {
    id: string;
    name: string;
    price: number;
    upsellProductId?: string;
  }
  
  export interface ICartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    rebateQuantity?: number;
    rebatePercent?: number;
  }
  
  export interface DeliveryAddress {
    name: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    zipCode: string;
    city: string;
    country: string;
    companyName?: string;
    vatNumber?: string;
  }
  