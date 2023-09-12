'use client';

import { useState } from 'react';

import { useParams } from 'next/navigation';
import Image from 'next/image';

import styled from 'styled-components';

import { Flexbox, Typography } from '@/components/atoms';

import { UserCartsList, UserPostsList, UserTodosList } from '@/container/users';

import useQueryUserTodos from '@/hooks/useQueryUserTodos';
import useQueryUserPosts from '@/hooks/useQueryUserPosts';
import useQueryUserDetail from '@/hooks/useQueryUserDetail';
import useQueryUserCarts from '@/hooks/useQueryUserCarts';

import { TOPBAR_HEIGHT } from '@/constants/theme';
import { NEXT_IMAGE_BLUR_URL } from '@/constants/products';

function UserDetail() {
  const params = useParams();
  const id = Number(params.id);

  const [tab, setTab] = useState('carts');

  const { data: userDetailData } = useQueryUserDetail(id);
  const { data: userCartsData } = useQueryUserCarts(id);
  const { data: userPostsData } = useQueryUserPosts(id);
  const { data: userTodosData } = useQueryUserTodos(id);

  if (!userDetailData || !userCartsData || !userPostsData || !userTodosData)
    return;

  return (
    <div>
      <Flexbox
        align="center"
        justify="center"
        direction="column"
        mt={`${TOPBAR_HEIGHT}px`}
        gap={5}
      >
        <ImageWrap>
          <Image
            src={userDetailData.image}
            alt={`user-${userDetailData.username}-${id}`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={NEXT_IMAGE_BLUR_URL}
          />
        </ImageWrap>
        <Typography>{userDetailData.username}</Typography>
        <Typography>{userDetailData.email}</Typography>
      </Flexbox>
      <Flexbox align="center" justify="space-between" mt="20px">
        <Typography
          style={{
            textAlign: 'center',
            flex: 1
          }}
          pt="5px"
          pb="10px"
          weight={tab === 'carts' ? 'bold' : 'regular'}
          onClick={() => setTab('carts')}
        >
          Carts (
          {userCartsData.total ? userCartsData.carts[0].totalProducts : 0})
        </Typography>
        <Typography
          style={{
            textAlign: 'center',
            flex: 1
          }}
          weight={tab === 'posts' ? 'bold' : 'regular'}
          onClick={() => setTab('posts')}
        >
          Posts ({userPostsData.total})
        </Typography>
        <Typography
          style={{
            textAlign: 'center',
            flex: 1
          }}
          weight={tab === 'todos' ? 'bold' : 'regular'}
          onClick={() => setTab('todos')}
        >
          Todos ({userTodosData.total})
        </Typography>
      </Flexbox>
      {tab === 'carts' && <UserCartsList />}
      {tab === 'posts' && <UserPostsList />}
      {tab === 'todos' && <UserTodosList />}
    </div>
  );
}

const ImageWrap = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: #eeeeee;
  margin-right: 10px;
`;

export default UserDetail;
