'use client';

import { UsersCard } from '@/components/molecules';
import { Flexbox } from '@/components/atoms';

import useQueryUsers from '@/hooks/useQueryUsers';

import { BOTTOM_NAV_HEIGHT, TOPBAR_HEIGHT } from '@/constants/theme';

function Users() {
  const { data } = useQueryUsers();

  if (!data) return;

  return (
    <Flexbox
      direction="column"
      gap={10}
      style={{
        padding: `${TOPBAR_HEIGHT}px 20px ${BOTTOM_NAV_HEIGHT}px`
      }}
    >
      {data.users.map((user) => (
        <UsersCard
          key={`user-data-${user.id}`}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          age={user.age}
          gender={user.gender}
          email={user.email}
          username={user.username}
          image={user.image}
        />
      ))}
    </Flexbox>
  );
}

export default Users;
