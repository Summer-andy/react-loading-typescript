import { keyframes } from 'styled-components';

const animate = keyframes`
  50% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(-180deg) rotateX(-180deg);
  }
`;

export { animate };
