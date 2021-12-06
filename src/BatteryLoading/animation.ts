import { keyframes } from 'styled-components';

const changeSharp = (color, size) => keyframes`
  0% {
    box-shadow: inset 0 0 0 ${color};
  }
  100% {
    box-shadow: inset ${size} 0 0 ${color}
  }
`;

export { changeSharp };
