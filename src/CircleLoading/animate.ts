import { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: rotate(90deg) scale(.3);
  }
`;

export { load };
