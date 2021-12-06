import * as React from 'react';
import styled from 'styled-components';
import { createLoading } from '../utils';
import { bouncedelay } from './animate';

const sizeItem = {
  small: 24,
  default: 30,
  large: 40
};

const LoadingContainer = styled.div`
  height: 0;
  width: 4px;
  border-width: 0 4px
    ${({ size }) => (size === 'small' ? 40 : size === 'large' ? 60 : 50)}px 4px;
  border-style: none solid solid;
  border-color: transparent transparent ${({ color }) => color};
  position: relative;
  padding-top: 25px;
`;

const Center = styled.div`
  position: absolute;
  transform: translateX(-3px) translateY(-4px);
  width: 4px;
  height: 4px;
  border: 3px ${({ color }) => color} solid;
  background: #fff;
  border-radius: 5px;
`;

const Con = styled.div`
  position: relative;
  animation: ${bouncedelay} ${({ speed }) => speed}s infinite linear;
`;

const ItemFirst = styled.div`
  position: absolute;
  height: 0;
  width: 2px;
  border-width: ${({ size }) => sizeItem[size]}px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${({ color }) => color} transparent transparent;
  transform-origin: 0 -2px;
  transform: rotate(60deg);
`;

const ItemSecord = styled.div`
  position: absolute;
  transform-origin: 2px -1px;
  transform: rotate(180deg);
  height: 0;
  width: 2px;
  border-width: ${({ size }) => sizeItem[size]}px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${({ color }) => color} transparent transparent;
`;

const ItemThree = styled.div`
  position: absolute;
  transform-origin: 5px 0;
  transform: rotate(300deg);
  height: 0;
  width: 2px;
  border-width: ${({ size }) => sizeItem[size]}px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${({ color }) => color} transparent transparent;
`;

const WindMillLoading = ({ speed, size, style, color }) => {
  return (
    <LoadingContainer style={style} color={color} size={size}>
      <Center color={color} />
      <Con speed={speed}>
        <ItemFirst color={color} size={size} />
        <ItemSecord color={color} size={size} />
        <ItemThree color={color} size={size} />
      </Con>
    </LoadingContainer>
  );
};

export default createLoading(WindMillLoading)(5);
