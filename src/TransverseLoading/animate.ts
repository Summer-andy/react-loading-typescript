import { keyframes } from 'styled-components';

const bouncedelay = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
`;

export { bouncedelay };