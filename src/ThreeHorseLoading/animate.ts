import { keyframes } from 'styled-components';

const animation = width => keyframes`
  0% {
    transform: translate(-${width}px);
  }
  50% {
    transform: translate(0);
  }
  100% {
    transform: translate(${width}px);
  }
`;

export { animation };
