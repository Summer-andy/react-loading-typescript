import { keyframes } from 'styled-components';

const scaling = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 40px;
  }
  100% {
    width: 0;
  }
`;

const moveTo = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(60px);
  }
`;

export { scaling, moveTo };
