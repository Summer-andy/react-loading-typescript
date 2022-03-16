import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, sizeItem } from '../config';
import { createLoading, createAnimation } from '../utils';
import {
  leftLadderMove,
  rightLadderMove,
  RowLadderOneMove,
  RowLadderTwoMove,
  RowLadderThreeMove
} from './animate';

const LoadContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props =>
    props.size === 'small' ? 16 : props.size === 'large' ? 24 : 20}px;
  height: ${props =>
    props.size === 'small' ? 60 : props.size === 'large' ? 68 : 64}px;
`;

const LeftLadder = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1px;
  height: 0;
  border-bottom: ${props =>
      props.size === 'small' ? 60 : props.size === 'large' ? 68 : 64}px
    solid ${({ color }) => color};
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: ${leftLadderMove} ${({ speed }) => createAnimation(speed, 'ease')};
`;

const RightLadder = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1px;
  height: 0;
  border-bottom: ${props =>
      props.size === 'small' ? 60 : props.size === 'large' ? 68 : 64}px
    solid ${({ color }) => color};
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: ${rightLadderMove} ${({ speed }) => createAnimation(speed, 'ease')};
`;

const RowLadderOne = styled.div`
  position: absolute;
  left: 50%;
  top: 10px;
  width: 18px;
  height: 1px;
  margin-left: -9px;
  background-color: ${({ color }) => color};
  animation: ${RowLadderOneMove}
    ${({ speed }) => createAnimation(speed, 'ease')};
`;

const RowLadderTwo = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  width: 18px;
  height: 1px;
  margin-left: -9px;
  background-color: ${({ color }) => color};
  animation: ${RowLadderTwoMove}
    ${({ speed }) => createAnimation(speed, 'ease')};
`;

const RowLadderThree = styled.div`
  position: absolute;
  left: 50%;
  top: 50px;
  width: 18px;
  height: 1px;
  margin-left: -9px;
  background-color: ${({ color }) => color};
  animation: ${RowLadderThreeMove}
    ${({ speed }) => createAnimation(speed, 'ease')};
`;

// TODO size 参数未提取
const LadderLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style}>
      <LeftLadder color={color} speed={speed} size={size} />
      <RightLadder color={color} speed={speed} size={size} />
      <RowLadderOne color={color} speed={speed} size={size} />
      <RowLadderTwo color={color} speed={speed} size={size} />
      <RowLadderThree color={color} speed={speed} size={size} />
    </LoadContainer>
  );
};

export default createLoading(LadderLoading)(4);
