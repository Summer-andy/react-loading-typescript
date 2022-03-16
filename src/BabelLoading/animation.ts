import { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    -webkit-transform: scale(0.1);
    opacity: 1;
  }
  50% {
    -webkit-transform: scale(1);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: scale(1.5);
    opacity: 0.1;
  }
`;

export { animation };
