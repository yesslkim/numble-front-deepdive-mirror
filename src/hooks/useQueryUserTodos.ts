import { useQuery } from '@tanstack/react-query';

import { fetchUserTodos } from '@/api/users';

import queryKeys from '@/constants/queryKeys';

function useQueryUserTodos(id: number) {
  const { data, fetchStatus, status } = useQuery(
    queryKeys.users.userTodos(id),
    () => fetchUserTodos(id)
  );

  return {
    data,
    fetchStatus,
    status
  };
}

export default useQueryUserTodos;
