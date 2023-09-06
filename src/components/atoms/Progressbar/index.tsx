import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { TOPBAR_HEIGHT } from '@/constants/theme';

function Progressbar() {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const browserHeight = scrollHeight - clientHeight;
    const updatedWidth = scrollTop / browserHeight;

    setWidth(updatedWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrap>
      <ProgressbarStyled $percentage={width} />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  top: ${TOPBAR_HEIGHT}px;
  left: 0;
  width: 100%;
  height: 10px;
  background: #c7c7c7;
  z-index: 10;
`;

const ProgressbarStyled = styled.div<{ $percentage: number }>`
  background: red;
  transform: scaleX(${(props) => props.$percentage});
  transform-origin: center left;
  height: 10px;
`;

export default Progressbar;
