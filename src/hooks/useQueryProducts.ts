import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';

import { fetchProducts } from '@/api/products';

import queryKeys from '@/constants/queryKeys';

function useQueryProducts() {
  const queryClient = useQueryClient();

  const getInfinitData = useInfiniteQuery(
    queryKeys.products.productList(),
    fetchProducts,
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length < 5 && allPages.length * 20;
      }
    }
  );

  const inavalidateQuery = () =>
    queryClient.invalidateQueries(queryKeys.products.productList());

  return {
    // getData,
    getInfinitData,
    inavalidateQuery
  };
}

export default useQueryProducts;
