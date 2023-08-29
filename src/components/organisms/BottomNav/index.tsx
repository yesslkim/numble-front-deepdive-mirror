'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';

import { styled } from 'styled-components';

import { HiUsers, HiOutlineUsers } from 'react-icons/hi';
import { BsGrid, BsGridFill } from 'react-icons/bs';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';

import { Flexbox, Typography } from '@/components/atoms';

import { brandColor } from '@/constants/theme';

function BottomNav() {
  const pathname = usePathname();
  const params = useParams();

  if (params.id) return null;

  return (
    <BottomNavWrap component="ul" align="center" justify="space-between">
      <li>
        <Link href="/">
          {pathname === '/' ? (
            <AiFillHome
              style={{
                color: brandColor.black
              }}
            />
          ) : (
            <AiOutlineHome
              style={{
                color: brandColor.grey
              }}
            />
          )}
          <Typography color={pathname === '/' ? 'black' : 'grey'}>
            Home
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/products">
          {pathname === '/products' ? (
            <BsGridFill
              style={{
                color: brandColor.black
              }}
            />
          ) : (
            <BsGrid
              style={{
                color: brandColor.grey
              }}
            />
          )}
          <Typography color={pathname === '/products' ? 'black' : 'grey'}>
            Products
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/users">
          {pathname === '/users' ? (
            <HiUsers
              style={{
                color: brandColor.black
              }}
            />
          ) : (
            <HiOutlineUsers
              style={{
                color: brandColor.grey
              }}
            />
          )}
          <Typography color={pathname === '/users' ? 'black' : 'grey'}>
            Users
          </Typography>
        </Link>
      </li>
    </BottomNavWrap>
  );
}

const BottomNavWrap = styled(Flexbox)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  background: white;
  border-top: 1px solid #cacaca;

  li {
    flex: 1;
  }

  li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    padding: 10px;
  }
`;

export default BottomNav;
