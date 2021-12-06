import { keyframes } from 'styled-components';

const changeSharp = keyframes`
  0% {
    transform: translateX(-50%) rotate(45deg) scale(0);
  }
  50% {
    transform: translateX(125%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateX(300%) rotate(45deg) scale(0);
  }
`;


export { changeSharp };
