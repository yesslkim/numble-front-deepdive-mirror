const products = {
  productList: (params?: object) => ['productList', params],
  productDetail: (id: number) => ['productDetail', id]
};

const users = {
  userList: () => ['userList'],
  userDetail: (id: number) => ['userDetail', id],
  userCarts: (id: number) => ['userCarts', id],
  userPosts: (id: number) => ['userPosts', id],
  userTodos: (id: number) => ['userTodos', id]
};

const carts = {
  cartsOfUser: (id: number) => ['cartsOfUser', id]
};

const posts = {
  usersPost: (id: number) => ['usersPost', id]
};

const queryKeys = {
  products,
  users,
  carts,
  posts
};

export default queryKeys;
