import { keyframes } from 'styled-components';

const bouncedelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
`;

export { bouncedelay };
