import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, sizeItem } from '../config';
import { createLoading, createAnimation } from '../utils';
import { bounce } from './animate';

const LoadContainer = styled.div`
  position: relative;
  /* overflow: hidden; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
`;

const Circle = styled.div`
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  animation: ${bounce} ${({ speed }) => createAnimation(speed, 'ease-out')} alternate;
`;

const BottomReac = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: ${({ size }) => sizeContainer[size]};
  background-color: ${({ color }) => color};
`;

const JumpCircleLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} size={size}>
      <Circle color={color} speed={speed} size={size} />
      <BottomReac color={color} size={size} />
    </LoadContainer>
  );
};

export default createLoading(JumpCircleLoading)(0.5);
