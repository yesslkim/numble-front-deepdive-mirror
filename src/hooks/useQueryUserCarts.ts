import { useQuery } from '@tanstack/react-query';

import { fetchUserCarts } from '@/api/users';

import queryKeys from '@/constants/queryKeys';

function useQueryUserCarts(id: number) {
  const { data, fetchStatus, status } = useQuery(
    queryKeys.users.userCarts(id),
    () => fetchUserCarts(id)
  );

  return {
    data,
    fetchStatus,
    status
  };
}

export default useQueryUserCarts;
