import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer } from '../config';
import { createLoading, createAnimation } from '../utils';
import { animate } from './animate';

const LoadingContainer = styled.div`
  width: 120px;
  height: 120px;
  perspective: 120px;
  position: relative;
`;

const Item = styled.div`
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
  transform: rotate(0);
  background: ${({ color }) => color};
  animation: ${animate} ${({ speed }) => createAnimation(speed, 'ease')};
`;

const BlockReserveLoading = ({ speed, size, style, color }) => {
  return (
    <LoadingContainer style={style}>
      <Item color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default createLoading(BlockReserveLoading)(1);
