import { styled } from 'styled-components';

import { TOPBAR_HEIGHT } from '@/constants/theme';

function Progressbar() {
  return (
    <Wrap>
      <ProgressbarStyled />
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

const ProgressbarStyled = styled.div`
  animation: grow-progress auto linear forwards;
  animation-timeline: scroll(block root);
  background: red;
  width: 100%;
  height: 10px;
  transform-origin: 0 50%;
  transform: scaleX(0);

  @keyframes grow-progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

export default Progressbar;
