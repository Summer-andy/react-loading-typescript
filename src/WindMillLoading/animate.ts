import { keyframes } from 'styled-components';

const bouncedelay = keyframes`
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export { bouncedelay };
