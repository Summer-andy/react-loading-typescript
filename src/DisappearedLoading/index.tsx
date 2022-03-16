import * as React from 'react';
import styled from 'styled-components';
import { sizeItem } from '../config';
import { createLoading } from '../utils';
import { animate } from './animate';

const LoadingContainer = styled.div`
  width: 60px;
  height: 60px;
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
  animation: ${animate} ${props => props.speed}s ease-in-out infinite alternate;
`;

const ItemFirst = styled(Item)`
  animation-delay: -${props => props.speed / 2}s;
`;

const ItemTwo = styled(Item)`
  animation-delay: -${props => props.speed / 4}s;
`;

const DisappearedLoading = ({ speed, size, style, color }) => {
  return (
    <LoadingContainer style={style}>
      <ItemFirst color={color} speed={speed} size={size} />
      <ItemTwo color={color} speed={speed} size={size} />
      <Item color={color} speed={speed} size={size} />
    </LoadingContainer>
  );
};

export default createLoading(DisappearedLoading)(0.8);
