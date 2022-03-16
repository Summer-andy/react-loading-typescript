import { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(45deg);
  }
  50% {
    opacity: 1;
    transform: rotate(160deg);
  }
  62% {
    opacity: 0;
  }
  65% {
    opacity: 0;
    transform: rotate(200deg);
  }
  90% {
    transform: rotate(340deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export { load };
