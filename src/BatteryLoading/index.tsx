import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer } from '../util/style';
import { LoadingInfo } from '../@types';

const changeSharp = (color, size) => keyframes`
  0% {
    box-shadow: inset 0 0 0 ${color};
  }
  100% {
    box-shadow: inset ${size} 0 0 ${color}
  }
`;

const LoadContainer = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: 14px;
  border: 1px #fff solid;
  border-radius: 2px;
  position: relative;
  animation: ${({ color, size }) => changeSharp(color, sizeContainer[size])}
    ${({ speed }) => speed}s linear infinite;

  &::after {
    width: 2px;
    height: 7px;
    background-color: #fff;
    border-radius: 0 1px 1px 0;
    position: absolute;
    content: '';
    top: 2px;
    right: -4px;
  }
`;

const BatteryLoading: React.FC<LoadingInfo> = ({
  speed = 4,
  color = '#00adb5',
  size = 'default',
  style = commonStyle
}) => {
  return <LoadContainer {...{ style, speed, color, size }} />;
};

export default BatteryLoading;
