import { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: scale(1);
  }
  50%,
  75% {
    transform: scale(2.5);
  }
  78%, 100% {
    opacity: 0;
  }
`;

export { animation };
