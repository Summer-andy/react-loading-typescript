import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer } from '../config';
import { createAnimation, createLoading } from '../utils';
import { changeSharp } from './animate';

const LoadContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  height: ${({ size }) => sizeContainer[size]};
  width: ${({ size }) => sizeContainer[size]};
  background-color: ${({ color }) => color};
  position: absolute;
  margin: auto;
  border-radius: 2px;
  transform: translateY(0) rotate(45deg) scale(0);
  animation: ${changeSharp} ${({ speed }) => createAnimation(speed)};
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
