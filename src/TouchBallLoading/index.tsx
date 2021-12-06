import * as React from 'react';
import styled from 'styled-components';
import { sizeItem } from '../config';
import { createLoading } from '../utils';
import { leftAnimate, rightAnimate } from './animate';

const sizeContainer = {
  small: 50,
  default: 59,
  large: 68
};

const LoadingContainer = styled.div`
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  justify-content: space-between;
  width: ${({ size }) => sizeContainer[size]}px;
  height: ${({ size }) => sizeContainer[size]}px;
`;

const Item = styled.div`
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  border-radius: 50%;
  background: ${({ color }) => color};
`;

const ItemLeft = styled(Item)`
  transform: translateX(-100%);
  animation: ${leftAnimate} ${({ speed }) => speed}s ease-in alternate infinite;
`;

const ItemRight = styled(Item)`
  transform: translateX(-95%);
  animation: ${rightAnimate} ${({ speed }) => speed}s ease-out alternate
    infinite;
`;

const TouchBallLoading = ({ speed, size, style, color }) => {
  return (
    <LoadingContainer style={style} size={size}>
      <ItemLeft color={color} speed={speed} size={size} />
      <Item color={color} size={size} />
      <ItemRight color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default createLoading(TouchBallLoading)(1);
