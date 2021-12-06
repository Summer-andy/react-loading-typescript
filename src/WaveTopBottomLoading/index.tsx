import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, borderRadiusContainerSize, sizeItem } from '../config';
import { createLoading } from '../utils';
import { animate } from './animate';

const LoadingContainer = styled.div`
  width: ${({ size }) =>
    size === 'small' ? 40 : size === 'large' ? 60 : 50}px;
  height: ${({ size }) =>
    size === 'small' ? 40 : size === 'large' ? 60 : 50}px;
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  border-radius: 50%;
  background: ${({ color }) => color};
  animation: ${animate} ${({ speed }) => speed}s ease-in-out infinite alternate;
`;

const ItemFirst = styled(Item)`
  animation-delay: -${({ speed }) => speed / 2}s;
`;

const ItemTwo = styled(Item)`
  animation-delay: -${({ speed }) => speed / 4}s;
`;

const WaveTopBottomLoading = ({ speed, size, style, color }) => {
  return (
    <LoadingContainer style={style} size={size}>
      <ItemFirst color={color} speed={speed} size={size} />
      <ItemTwo color={color} speed={speed} size={size} />
      <Item color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default createLoading(WaveTopBottomLoading)(0.8);
