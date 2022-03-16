import * as React from 'react';
import styled from 'styled-components';
import { createLoading } from '../utils';
import { animation } from './animate';

const sizeContainer = {
  small: 60,
  default: 80,
  large: 100
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 4px;
  width: ${({ size }) => sizeContainer[size]}px;
  height: 8px;
  background: #fff;
`;

const ItemSpan = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: ${({ color }) => color};
  animation: ${({ size }) => animation(sizeContainer[size])}
    ${({ speed }) => speed}s linear infinite;
`;

const ThreeHorseLoading = ({ speed, size, style, color }) => {
  return (
    <Container style={style} color={color} size={size}>
      <ItemSpan speed={speed} style={style} color={color} size={size} />
    </Container>
  );
};

export default createLoading(ThreeHorseLoading)(2);
