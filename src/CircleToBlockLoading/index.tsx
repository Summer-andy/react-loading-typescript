import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { sizeContainer } from '../config';
import { createLoading } from '../utils';

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

const LoadContainer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;

const Item = styled.div`
  height: ${({ size }) => sizeContainer[size]};
  width: ${({ size }) => sizeContainer[size]};
  background-color: ${({ color }) => color};
  position: absolute;
  margin: auto;
  border-radius: 2px;
  transform: translateY(0) rotate(45deg) scale(0);
  animation: ${changeSharp} ${({ speed }) => speed}s linear infinite;
`;

const ItemFirst = styled(Item)`
  animation-delay: calc(${({ speed }) => speed}s * 2 / -1.5);
`;

const ItemTwo = styled(Item)`
  animation-delay: calc(${({ speed }) => speed}s * 3 / -1.5);
`;

const ItemThree = styled(Item)`
  animation-delay: calc(${({ speed }) => speed}s * 4 / -1.5);
`;

const CircleToBlockLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style}>
      <ItemFirst color={color} size={size} speed={speed} />
      <ItemTwo color={color} size={size} speed={speed} />
      <ItemThree color={color} size={size} speed={speed} />
    </LoadContainer>
  );
};

export default createLoading(CircleToBlockLoading)(3);
