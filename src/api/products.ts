import type { Products, ProductsData } from '@/types/products';

export async function fetchProducts({ pageParam = 0 }): Promise<ProductsData> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/products?skip=${pageParam}&limit=20`
  ).then((res) => res.json());

  return data;
}

export async function fetchProductDetail(id: number): Promise<Products> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/products/${id}`
  ).then((res) => res.json());

  return data;
}

export async function putEditProduct({
  productId,
  params
}: {
  productId: number;
  params: Partial<Products>;
}) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/products/${productId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }
  );
  return await data.json();
}
