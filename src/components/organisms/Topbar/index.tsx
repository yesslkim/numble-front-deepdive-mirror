'use client';
import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';

import { FiArrowLeftCircle } from '@react-icons/all-files/fi/FiArrowLeftCircle';

import { Typography } from '@/components/atoms';

function Topbar() {
  const router = useRouter();
  return (
    <Wrap>
      <Typography variant="h3" color="white" onClick={() => router.back()}>
        <FiArrowLeftCircle />
      </Typography>
    </Wrap>
  );
}

const Wrap = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 5px 10px;
`;

export default Topbar;
