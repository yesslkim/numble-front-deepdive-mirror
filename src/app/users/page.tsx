'use client';

import styled from 'styled-components';

import { UsersCard } from '@/components/molecules';
import { Button, Flexbox } from '@/components/atoms';

import useQueryUsers from '@/hooks/useQueryUsers';

import { BOTTOM_NAV_HEIGHT, TOPBAR_HEIGHT } from '@/constants/theme';

function Users() {
  const { data } = useQueryUsers();

  const handleClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

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
          birthDate={user.birthDate}
        />
      ))}
      <GoToBottom onClick={handleClick}>go to bottom</GoToBottom>
    </Flexbox>
  );
}

const GoToBottom = styled(Button)`
  position: fixed;
  bottom: 100px;
  right: 20px;
  background: green;
  padding: 10px;
`

export default Users;
