import { keyframes } from 'styled-components';

const animate1 = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

const animate2 = keyframes`
  0%, 100% {
    transform: scale(0)
  }
  50% {
    transform: scale(1)
  }
`;

export { animate1, animate2 };
