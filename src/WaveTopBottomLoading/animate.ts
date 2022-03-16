import { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
`;

export { animate };
