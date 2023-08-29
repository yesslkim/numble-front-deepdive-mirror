import { useQuery } from '@tanstack/react-query';

import { fetchUserList } from '@/api/users';

import queryKeys from '@/constants/queryKeys';

function useQueryUsers() {
  const { data, fetchStatus, status, refetch } = useQuery(
    queryKeys.users.userList(),
    fetchUserList
  );

  return {
    data,
    fetchStatus,
    status,
    refetch
  };
}

export default useQueryUsers;
