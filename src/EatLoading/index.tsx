import * as React from 'react';
import styled from 'styled-components';
import { sizeItem } from '../config';
import { createLoading } from '../utils';
import { load } from './animate';

const Container = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  border-style: dotted;
  border-color: ${({ color }) => color};
  border-width: 3px 2px 1px 4px;
  transition: all 1s ease;
  animation: ${load} ${props => props.speed}s linear infinite;
`;

const ItemDiv = styled.div`
  position: absolute;
  top: 45px;
  left: 25px;
  width: 0;
  height: 0;
  border-right: 12px solid transparent;
  border-top: 12px solid ${({ color }) => color};
  border-left: 12px solid ${({ color }) => color};
  border-bottom: 12px solid ${({ color }) => color};
  border-radius: 12px;
`;

// TODO size 参数未生效
const EatLoading = ({ speed, size, style, color }) => {
  return (
    <Container {...{ style, speed, color }}>
      <ItemDiv color={color} />
    </Container>
  );
};

export default createLoading(EatLoading)(2);
