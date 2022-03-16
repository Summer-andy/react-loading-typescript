import { keyframes } from 'styled-components';

const boom = keyframes`
  0% {
    transform: rotate(45deg) scale(1);
  }
  20% {
    transform: rotate(45deg) scale(1.1);
  }
  40% {
    transform: rotate(45deg) scale(1);
  }
  60% {
    transform: rotate(45deg) scale(1.2);
  }
  100% {
    transform: rotate(45deg) scale(1);
  }
`;

export { boom };
