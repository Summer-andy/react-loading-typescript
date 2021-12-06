import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { sizeContainer } from '../config';
import { createLoading } from '../utils';

const changeSharp = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 6px;
  }
`;

const LoadContainer = styled.div`
  height: ${({ size }) => sizeContainer[size]};
  width: ${({ size }) => sizeContainer[size]};
  border: 1px ${({ color }) => color} solid;
  border-radius: 0 0 5px 5px;
  position: relative;

  &::after {
    content: '';
    width: 5px;
    height: 12px;
    position: absolute;
    border: 1px solid ${({ color }) => color};
    border-left: none;
    border-radius: 0 ${({ size }) => sizeContainer[size]}
      ${({ size }) => sizeContainer[size]} 0;
    top: 4px;
    left: ${({ size }) => sizeContainer[size]};
  }

  &::before {
    content: '';
    width: 1px;
    height: 6px;
    position: absolute;
    background-color: ${({ color }) => color};
    top: -10px;
    left: ${props =>
      props.size === 'small' ? 6 : props.size === 'large' ? 12 : 8}px;
    box-shadow: 5px 0 0 0 ${({ color }) => color},
      5px -5px 0 0 ${({ color }) => color}, 10px 0 0 0 ${({ color }) => color};
    animation: ${changeSharp} ${({ speed }) => speed}s linear infinite alternate;
  }
`;

const CoffeeLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} color={color} size={size} speed={speed} />
  );
};

export default createLoading(CoffeeLoading)(1);
