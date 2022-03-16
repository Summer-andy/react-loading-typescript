import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer } from '../config';
import { createLoading } from '../utils';
import { changeSharp } from './animate';

const LoadContainer = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
  border: 1px ${({ color }) => color} solid;
  border-radius: 0 0 5px 5px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: ${({ size }) => sizeContainer[size]};
    width: 5px;
    height: 12px;
    border: 1px solid ${({ color }) => color};
    border-left: none;
    border-radius: 0 ${({ size }) => sizeContainer[size]}
      ${({ size }) => sizeContainer[size]} 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: ${props =>
      props.size === 'small' ? 6 : props.size === 'large' ? 12 : 8}px;
    top: -10px;
    width: 1px;
    height: 6px;
    background-color: ${({ color }) => color};
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
