import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer } from '../config';
import { createAnimation, createLoading } from '../utils';
import { changeSharp } from './animation';

const LoadContainer = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: 14px;
  border: 1px #fff solid;
  border-radius: 2px;
  position: relative;
  animation: ${({ color, size }) => changeSharp(color, sizeContainer[size])}
    ${({ speed }) => createAnimation(speed)};

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    right: -4px;
    width: 2px;
    height: 7px;
    border-radius: 0 1px 1px 0;
    background-color: #fff;
  }
`;

const BatteryLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer speed={speed} color={color} style={style} size={size} />
  );
};

export default createLoading(BatteryLoading)(4);
