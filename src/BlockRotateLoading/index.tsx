import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer } from '../config';
import { createLoading } from '../utils';
import { animate1, animate2 } from './animate';

const LoadingContainer = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  margin: 0 auto;
  animation: ${animate1} 2s linear infinite;
`;

const Item = styled.div`
  position: absolute;
  top: 0;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  animation: ${animate2} ${({ speed }) => speed}s ease-in-out infinite;
`;

//TODO 可以考虑转换为伪元素

const ItemOne = styled(Item)``;

const ItemTwo = styled(Item)`
  animation-delay: -${props => props.speed / 2}s;
  top: auto;
  bottom: 0;
`;

// TODO size 参数暂未生效
const BlockRotateLoading = ({ speed, size, style, color }) => {
  return (
    <LoadingContainer style={style}>
      <ItemOne color={color} speed={speed} />
      <ItemTwo color={color} speed={speed} />
    </LoadingContainer>
  );
};

export default createLoading(BlockRotateLoading)(2);
