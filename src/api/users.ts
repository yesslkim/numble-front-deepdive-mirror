import {
  UserCarts,
  UserPosts,
  UserTodos,
  Users,
  UsersData
} from '@/types/users';

export async function fetchUserList(): Promise<UsersData> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users`).then(
    (res) => res.json()
  );

  return data;
}

export async function fetchUserDetail(id: number): Promise<Users> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/users/${id}`
  ).then((res) => res.json());

  return data;
}

export async function fetchUserCarts(id: number): Promise<UserCarts> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/users/${id}/carts`
  ).then((res) => res.json());

  return data;
}

export async function fetchUserPosts(id: number): Promise<UserPosts> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/users/${id}/posts`
  ).then((res) => res.json());

  return data;
}

export async function fetchUserTodos(id: number): Promise<UserTodos> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/users/${id}/todos`
  ).then((res) => res.json());

  return data;
}
