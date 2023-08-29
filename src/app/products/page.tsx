import { dehydrate } from '@tanstack/react-query';

import Hydrate from '@/components/hydrate-client';

import getQueryClient from '@/utils/getQueryClient';
import { fetchProducts } from '@/api/products';

import ProductsList from './ProductsList';

import queryKeys from '@/constants/queryKeys';

export default async function Products() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(
    queryKeys.products.productList(),
    fetchProducts
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ProductsList />
    </Hydrate>
  );
}
