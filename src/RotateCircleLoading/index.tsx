import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, sizeItem } from '../config';
import { createLoading } from '../utils';
import { rotate, opacityChange } from './animate';

const LoadContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
  animation: ${rotate} ${props => props.speed || 2.4}s linear infinite;

  > div {
    position: absolute;
    width: ${({ size }) => sizeItem[size]};
    height: ${({ size }) => sizeItem[size]};
    border-radius: 50%;
    background-color: ${({ color }) => color};
    animation: ${opacityChange} ${({ speed }) => speed}s linear infinite
      alternate;
  }

  > div:nth-of-type(1) {
    animation-delay: 0s;
  }

  > div:nth-of-type(2) {
    animation-delay: ${({ speed }) => speed / 3}s;
  }

  > div:nth-of-type(3) {
    animation-delay: ${({ speed }) => (speed / 3) * 2}s;
  }

  > div:nth-of-type(4) {
    animation-delay: ${({ speed }) => (speed / 3) * 3}s;
  }
`;

const CircleOne = styled.div`
  left: 0;
  top: 0;
`;

const CircleTwo = styled.div`
  right: 0;
  top: 0;
`;

const CircleThree = styled.div`
  left: 0;
  bottom: 0;
`;

const CircleFour = styled.div`
  right: 0;
  bottom: 0;
`;

// TODO 可以优化为一个子组件
const RotateCircleLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} speed={speed} color={color} size={size}>
      <CircleOne color={color} speed={speed} size={size} />
      <CircleTwo color={color} speed={speed} size={size} />
      <CircleThree color={color} speed={speed} size={size} />
      <CircleFour color={color} speed={speed} size={size} />
    </LoadContainer>
  );
};

export default createLoading(RotateCircleLoading)(2.4);
