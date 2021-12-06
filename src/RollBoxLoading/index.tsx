import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, sizeItem } from '../config';
import { createLoading } from '../utils';
import { rollOne, rollTwo, moveLeft } from './animate';

const LoadContainer = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
  position: relative;
  /* overflow: hidden; */
`;

const RollBoxOne = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform-origin: right top;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  background-color: ${({ color }) => color};
  animation: ${rollOne} ${({speed}) => speed}s ease infinite;
`;

const RollBoxTwo = styled.div`
  position: absolute;
  left: ${({ size }) => sizeItem[size]};
  bottom: ${({ size }) => sizeItem[size]};
  transform-origin: left bottom;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  background-color: ${({ color }) => color};
  animation: ${rollTwo} ${({speed}) => speed}s ease infinite;
`;

const RollBoxMove = styled.div`
  position: absolute;
  left: ${({ size }) => sizeItem[size]};
  bottom: 0;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  background-color: ${({ color }) => color};
  animation: ${moveLeft} ${({speed}) => speed}s ease infinite;
`;

const RollBoxLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} size={size}>
      <RollBoxOne size={size} color={color} speed={speed} />
      <RollBoxTwo size={size} color={color} speed={speed} />
      <RollBoxMove size={size} color={color} speed={speed} />
    </LoadContainer>
  );
};

export default createLoading(RollBoxLoading)(3);
