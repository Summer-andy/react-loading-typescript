import * as React from 'react';
import styled from 'styled-components';
import { sizeItem } from '../config';
import { createLoading, createAnimation } from '../utils';
import { animationChild } from './animate';

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 4px;
  margin: 0 auto;
  border-radius: 2px;
  background: ${({ color }) => color};
`;

const Item = styled.div`
  position: absolute;
  margin-left: -8px;
  margin-top: ${props =>
    props.size === 'small' ? -3 : props.size === 'large' ? -5 : -5}px;
  border-radius: 50%;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  background: ${({ color }) => color};
  animation: ${animationChild}
    ${({ speed }) => createAnimation(speed, 'ease-in')} alternate;
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
