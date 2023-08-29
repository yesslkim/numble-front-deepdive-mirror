import { useQuery } from '@tanstack/react-query';

import { fetchUserPosts } from '@/api/users';

import queryKeys from '@/constants/queryKeys';

function useQueryUserPosts(id: number) {
  const { data, fetchStatus, status } = useQuery(
    queryKeys.users.userPosts(id),
    () => fetchUserPosts(id)
  );

  return {
    data,
    fetchStatus,
    status
  };
}

export default useQueryUserPosts;
