import * as React from 'react';
import styled from 'styled-components';
import { sizeItem } from '../config';
import { createLoading } from '../utils';
import { bouncedelay } from './animate';

const LoadingContainer = styled.div`
  width: 150px;
  height: 150px;
  text-align: center;
`;

const load = styled.div`
  display: inline-block;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  margin-top: calc(50% - ${({ size }) => sizeItem[size]} / 2);
  border-radius: 100%;
  background-color: ${({ color }) => color};
  animation: ${bouncedelay} ${({ speed }) => speed}s infinite ease-in-out;
  animation-fill-mode: both;
`;

const LoadFirst = styled(load)`
  animation-delay: -0.48s;
`;

const LoadTwo = styled(load)`
  animation-delay: -0.32s;
`;

const LoadThree = styled(load)`
  animation-delay: -0.16s;
`;

const TransverseLoading = ({ speed, size, style, color }) => {
  return (
    <LoadingContainer style={style}>
      <LoadFirst color={color} size={size} speed={speed} />
      <LoadTwo color={color} size={size} speed={speed} />
      <LoadThree color={color} size={size} speed={speed} />
    </LoadingContainer>
  );
};

export default createLoading(TransverseLoading)(1.4);
