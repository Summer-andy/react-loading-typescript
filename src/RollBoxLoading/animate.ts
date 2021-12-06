import { keyframes } from 'styled-components';

const rollOne = keyframes`
  0%,
  20% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  60%,
  70% {
    transform: rotate(180deg);
    opacity: 0;
  }
  100% {
    transform: rotate(180deg);
    opacity: 0;
  }
`;

const rollTwo = keyframes`
  0%,
  50% {
    transform: rotate(0deg) translateX(0);
    opacity: 0;
  }
  51% {
    transform: rotate(0deg) translateX(0);
    opacity: 1;
  }
  70% {
    transform: rotate(0deg) translateX(-100%);
    opacity: 1;
  }
  90% {
    transform: rotate(180deg) translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: rotate(180deg) translateX(-100%);
    opacity: 1;
  }
`;

const moveLeft = keyframes`
  0%,
  51% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export { rollOne, rollTwo, moveLeft };
