import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, sizeItem } from '../config';
import { createAnimation, createLoading } from '../utils';
import { boom } from './animate';

const LoadContainer = styled.div`
  position: relative;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
`;

const Heart = styled.div`
  position: relative;
  transform: rotate(45deg);
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  background-color: ${({ color }) => color};
  animation: ${boom} ${({ speed }) => createAnimation(speed, 'ease')};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }

  &::before {
    left: -50%;
    bottom: 0;
  }

  &::after {
    top: -50%;
    right: 0;
  }
`;

const HeartBoomLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} size={size}>
      <Heart color={color} speed={speed} size={size} />
    </LoadContainer>
  );
};

export default createLoading(HeartBoomLoading)(2);
