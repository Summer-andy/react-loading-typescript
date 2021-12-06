import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { sizeItem } from '../config';
import { createLoading } from '../utils';

const animationChild = keyframes`
  0% {
  }
  100% {
    margin-left: 92px;
  }
`;

const Container = styled.div`
  width: 100px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
  position: relative;
  background: ${props => props.color || '#00adb5'};
`;

const Item = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem['default']};
  height: ${props => sizeItem[props.size] || sizeItem['default']};
  margin-top: ${props =>
    props.size === 'small' ? -3 : props.size === 'large' ? -5 : -5}px;
  border-radius: 50%;
  background: ${props => props.color || '#00adb5'};
  position: absolute;
  margin-left: -8px;
  animation: ${animationChild} ${props => props.speed || 1}s ease-in infinite
    alternate;
`;

// FIXME 拼写问题
const PassThrouthLoading = ({ speed, size, style, color }) => {
  return (
    <Container style={style} speed={speed} color={color}>
      <Item speed={speed} color={color} size={size} />
    </Container>
  );
};

export default createLoading(PassThrouthLoading)(1);
