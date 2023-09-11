import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';

import { fetchProducts } from '@/api/products';

import queryKeys from '@/constants/queryKeys';

const TOTAL_PRODUCTS = 100;
const TOTAL_PRODUCTS_PER_PAGE = 20;
const TOTAL_PAGE = TOTAL_PRODUCTS / TOTAL_PRODUCTS_PER_PAGE;

function useQueryProducts() {
  const queryClient = useQueryClient();

  const getInfinitData = useInfiniteQuery(
    queryKeys.products.productList(),
    fetchProducts,
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length < TOTAL_PAGE
          ? allPages.length * TOTAL_PRODUCTS_PER_PAGE
          : undefined;
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
