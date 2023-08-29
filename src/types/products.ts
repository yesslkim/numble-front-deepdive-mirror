import { CommonFetchType } from './common';

export type ProductsData = CommonFetchType & {
  products: Products[];
};

export type Products = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number | string;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};
