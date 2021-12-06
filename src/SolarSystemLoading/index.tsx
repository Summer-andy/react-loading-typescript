import * as React from 'react';
import styled from 'styled-components';
import { createLoading } from '../utils';
import { rotate } from './animate';

const sizeContainer = {
  small: 44,
  default: 50,
  large: 56
};

const LoadContainer = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: ${({ size }) => sizeContainer[size]}px;
  height: ${({ size }) => sizeContainer[size]}px;
`;

const Sun = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: ${({ size }) =>
    size === 'small' ? -1 : size === 'large' ? -3 : -2}px;
  margin-top: ${({ size }) =>
    size === 'small' ? -1 : size === 'large' ? -3 : -2}px;
  width: ${({ size }) => (size === 'small' ? 2 : size === 'large' ? 6 : 4)}px;
  height: ${({ size }) => (size === 'small' ? 2 : size === 'large' ? 6 : 4)}px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

const FirstTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: ${({ size }) =>
    size === 'small' ? 24 : size === 'large' ? 36 : 30}px;
  height: ${({ size }) =>
    size === 'small' ? 24 : size === 'large' ? 36 : 30}px;
  border-radius: 100%;
  border: 1px solid ${({ color }) => color};
  margin-left: ${({ size }) =>
    size === 'small' ? -12 : size === 'large' ? -18 : -15}px;
  margin-top: ${({ size }) =>
    size === 'small' ? -12 : size === 'large' ? -18 : -15}px;
  animation: ${rotate} ${props => props.speed}s linear infinite;
`;

const Earth = styled.div`
  position: absolute;
  top: ${({ size }) => (size === 'small' ? 1 : size === 'large' ? 3 : 2)}px;
  left: ${({ size }) => (size === 'small' ? 1 : size === 'large' ? 1 : 0)}px;
  width: ${({ size }) => (size === 'small' ? 4 : size === 'large' ? 8 : 6)}px;
  height: ${({ size }) => (size === 'small' ? 4 : size === 'large' ? 8 : 6)}px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

const SecondTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: ${({ size }) =>
    size === 'small' ? -27 : size === 'large' ? -33 : -30}px;
  margin-top: ${({ size }) =>
    size === 'small' ? -27 : size === 'large' ? -33 : -30}px;
  box-sizing: border-box;
  width: ${({ size }) =>
    size === 'small' ? 54 : size === 'large' ? 66 : 60}px;
  height: ${({ size }) =>
    size === 'small' ? 54 : size === 'large' ? 66 : 60}px;
  border-radius: 100%;
  border: 1px solid ${({ color }) => color};

  animation: ${rotate} ${({ speed }) => speed * 1.5}s linear infinite;
`;

const Mars = styled.div`
  position: absolute;
  top: ${({ size }) => (size === 'small' ? 1 : size === 'large' ? 3 : 2)}px;
  left: ${({ size }) => (size === 'small' ? 6 : size === 'large' ? 8 : 7)}px;
  width: ${({ size }) => (size === 'small' ? 6 : size === 'large' ? 10 : 8)}px;
  height: ${({ size }) => (size === 'small' ? 6 : size === 'large' ? 10 : 8)}px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

// TODO 默认时间暂时分不出来
const SolarSystemLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} size={size}>
      <Sun color={color} size={size} />
      <FirstTrack color={color} speed={speed} size={size}>
        <Earth color={color} size={size} />
      </FirstTrack>
      <SecondTrack color={color} speed={speed} size={size}>
        <Mars color={color} size={size} />
      </SecondTrack>
    </LoadContainer>
  );
};

export default createLoading(SolarSystemLoading)(2);
