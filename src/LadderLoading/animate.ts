import { keyframes } from 'styled-components';

const leftLadderMove = keyframes`
  0% {
    transform: translateY(68px);
  }
  10%,
  50% {
    transform: translateY(0);
  }
  60%,
  100% {
    transform: translateY(-68px);
  }
`;

const rightLadderMove = keyframes`
  0%,
  40% {
    transform: translateY(68px);
  }
  50%,
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-68px);
  }
`;

const RowLadderOneMove = keyframes`
  0%,
  10% {
    transform: translateY(68px);
  }
  20%,
  60% {
    transform: translateY(0);
  }
  70%,
  100% {
    transform: translateY(-68px);
  }
`;

const RowLadderTwoMove = keyframes`
  0%,
  20% {
    transform: translateY(68px);
  }
  30%,
  70% {
    transform: translateY(0);
  }
  80%,
  100% {
    transform: translateY(-68px);
  }
`;

const RowLadderThreeMove = keyframes`
  0%,
  30% {
    transform: translateY(68px);
  }
  40%,
  80% {
    transform: translateY(0);
  }
  90%,
  100% {
    transform: translateY(-68px);
  }
`;

export {
  leftLadderMove,
  rightLadderMove,
  RowLadderOneMove,
  RowLadderTwoMove,
  RowLadderThreeMove
};
