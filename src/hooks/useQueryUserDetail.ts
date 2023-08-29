import { useQuery } from '@tanstack/react-query';

import { fetchUserDetail } from '@/api/users';

import queryKeys from '@/constants/queryKeys';

function useQueryUserDetail(id: number) {
  const { data, fetchStatus, status, refetch } = useQuery(
    queryKeys.users.userDetail(id),
    () => fetchUserDetail(id)
  );

  return {
    data,
    fetchStatus,
    status,
    refetch
  };
}

export default useQueryUserDetail;
