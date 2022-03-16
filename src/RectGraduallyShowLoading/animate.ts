import { keyframes } from 'styled-components';

const gradualShowDispear = keyframes`
  0% {
    opacity: 0.3;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  65% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

const gradualDispear = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%)
  }
`;

export { gradualShowDispear, gradualDispear };
