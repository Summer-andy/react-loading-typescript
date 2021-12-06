import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { sizeItem } from '../config';
import { createLoading } from '../utils';

const load = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: rotate(90deg) scale(.3);
  }
`;

const LoadingContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const ItemSpan = styled.span`
  display: inline-block;
  height: ${({ size }) => sizeItem[size]};
  width: ${({ size }) => sizeItem[size]};
  margin-top: 50%;
  margin-right: 5px;
  background: ${({ color }) => color};
  transform-origin: right bottom;
  animation: ${load} ${({ speed }) => speed}s ease infinite;
`;

const ItemSpan1 = styled(ItemSpan)`
  animation-delay: 0.2s;
`;

const ItemSpan2 = styled(ItemSpan)`
  animation-delay: 0.4s;
`;

const ItemSpan3 = styled(ItemSpan)`
  animation-delay: 0.6s;
`;

const ItemSpan4 = styled(ItemSpan)`
  animation-delay: 0.8s;
`;

const CircleLoading = ({ speed, size, style, color }) => {
  return (
    <LoadingContainer style={style}>
      <ItemSpan1 color={color} speed={speed} size={size} />
      <ItemSpan2 color={color} speed={speed} size={size} />
      <ItemSpan3 color={color} speed={speed} size={size} />
      <ItemSpan4 color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default createLoading(CircleLoading)(2);
