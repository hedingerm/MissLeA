export type ViewState = 'HOME' | 'ABOUT' | 'SERVICES' | 'SHOP' | 'CONTACT' | 'PRODUCT_DETAILS' | 'CART';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Unikate' | 'Accessoires' | 'Gutscheine';
  image: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ServiceType = 'TAILORING' | 'ALTERATION' | 'STYLING';

export interface ServiceData {
  id: ServiceType;
  title: string;
  description: string;
  image: string; // Placeholder or abstract
}

export interface FunnelFormData {
  serviceType: ServiceType;
  [key: string]: any;
}