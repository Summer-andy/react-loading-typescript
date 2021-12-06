import { keyframes } from 'styled-components';

const leftAnimate = keyframes`
  50%,
  100% {
    transform: translateX(95%);
  }
`;

const rightAnimate = keyframes`
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export { leftAnimate, rightAnimate };
