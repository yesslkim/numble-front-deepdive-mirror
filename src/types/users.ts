import { CommonFetchType } from './common';

export type UsersData = CommonFetchType & {
  users: Users[];
};

export type Users = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  username: string;
  image: string;
};

export type UserCarts = CommonFetchType & {
  carts: Carts[];
};

export type Carts = {
  discountedTotal: number;
  id: number;
  products: CartsProducts[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
};

export type CartsProducts = {
  discountPercentage: number;
  discountedPrice: number;
  id: number;
  price: number;
  quantity: number;
  title: string;
  total: number;
};

export type UserPosts = CommonFetchType & {
  posts: Posts[];
};

export type Posts = {
  id: number;
  body: string;
  tags: string[];
  title: string;
  userId: number;
  reactions: number;
};

export type UserTodos = CommonFetchType & {
  todos: Todos[];
};

export type Todos = {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
};
