import { keyframes } from 'styled-components';

const fly = keyframes`
  0% {
    transform: translateY(-8px);
  }

  50% {
    transform: translateY(12px);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-8px);
  }
`;

export { fly };
