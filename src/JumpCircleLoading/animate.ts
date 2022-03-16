import { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0) scaleX(1.2) scaleY(0.8);
  }
  25% {
    transform: translateY(-10px) scaleX(1) scaleY(1);
  }
  100% {
    background-color: #f9c094;
    transform: translateY(-40px);
  }
`;

export { bounce };
