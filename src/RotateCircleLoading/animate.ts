import { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const opacityChange = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
`;

export { rotate, opacityChange };
