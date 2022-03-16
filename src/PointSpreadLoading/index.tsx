import * as React from 'react';
import styled from 'styled-components';
import { sizeItem } from '../config';
import { createLoading } from '../utils';
import { animation } from './animate';

const Container = styled.div`
  display: flex;
  place-items: center;
  width: 120px;
  height: 120px;
  overflow: hidden;
  animation-delay: 1s;
`;

const Item = styled.div`
  display: flex;
  place-items: center;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 7px;

  &::before {
    content: '';
    width: ${({ size }) => sizeItem[size]};
    height: ${({ size }) => sizeItem[size]};
    border-radius: 50%;
    background-color: ${({ color }) => color};
    opacity: 0.7;
    animation: ${animation} 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: ${({ delay }) => delay}ms;
    transition: 0.5s all ease;
    transform: scale(1);
  }
`;

// TODO 时间参数未生效
const PointSpreadLoading = ({ speed, size, style, color }) => {
  return (
    <Container style={style}>
      <Item delay="250" speed={speed} color={color} size={size} />
      <Item delay="500" speed={speed} color={color} size={size} />
      <Item delay="750" speed={speed} color={color} size={size} />
      <Item delay="1000" speed={speed} color={color} size={size} />
    </Container>
  );
};

export default createLoading(PointSpreadLoading)(2);
