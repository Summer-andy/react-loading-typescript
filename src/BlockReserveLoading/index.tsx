import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, defaultColor, sizeContainer } from '../config';
import { LoadingInfo } from '../@types';

const animate = keyframes`
  50% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(-180deg) rotateX(-180deg);
  }
`;

const LoadingContainer = styled.div`
  perspective: 120px;
  width: 120px;
  height: 120px;
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
  animation: ${animate} ${({ speed }) => speed}s infinite;
`;

const BlockReserveLoading: React.FC<LoadingInfo> = ({
  speed = 1,
  size = 'default',
  style = commonStyle,
  color = defaultColor
}) => {
  return (
    <LoadingContainer style={style}>
      <Item color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default BlockReserveLoading;
