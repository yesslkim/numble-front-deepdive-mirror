import { useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchProductDetail } from '@/api/products';

import queryKeys from '@/constants/queryKeys';

function useQueryProductDetail(id: number) {
  const queryClient = useQueryClient();
  const { data, fetchStatus, status, refetch } = useQuery(
    queryKeys.products.productDetail(id),
    () => fetchProductDetail(id)
  );

  const inavalidateQuery = () =>
    queryClient.invalidateQueries(queryKeys.products.productDetail(id));

  return {
    data,
    fetchStatus,
    status,
    refetch,
    inavalidateQuery
  };
}

export default useQueryProductDetail;
