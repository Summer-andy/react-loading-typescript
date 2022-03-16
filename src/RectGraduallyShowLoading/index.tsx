import * as React from 'react';
import styled from 'styled-components';
import { createLoading } from '../utils';
import { gradualShowDispear, gradualDispear } from './animate';

// TODO 转换为对象
const LoadContainer = styled.div`
  width: ${props =>
    props.size === 'small' ? 56 : props.size === 'large' ? 64 : 60}px;
  height: ${props =>
    props.size === 'small' ? 12 : props.size === 'large' ? 20 : 16}px;
  position: relative;
  overflow: hidden;
`;

const RectBig = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color || '#00adb5'};
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  animation: ${gradualDispear} ${({ speed }) => speed}s linear infinite;
`;

const RectSmallWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;

  > div {
    animation: ${gradualShowDispear} ${({ speed }) => speed}s ease-in-out
      infinite;
  }

  > div:nth-of-type(8) {
    animation-delay: 0s;
  }

  > div:nth-of-type(7) {
    animation-delay: ${({ speed }) => speed / 16}s;
  }

  > div:nth-of-type(6) {
    animation-delay: ${({ speed }) => (speed / 16) * 2}s;
  }

  > div:nth-of-type(5) {
    animation-delay: ${({ speed }) => (speed / 16) * 3}s;
  }

  > div:nth-of-type(4) {
    animation-delay: ${({ speed }) => (speed / 16) * 4}s;
  }

  > div:nth-of-type(3) {
    animation-delay: ${({ speed }) => (speed / 16) * 5}s;
  }

  > div:nth-of-type(2) {
    animation-delay: ${({ speed }) => (speed / 16) * 6}s;
  }

  > div:nth-of-type(1) {
    animation-delay: ${({ speed }) => (speed / 16) * 7}s;
  }
`;

const RectSmall = styled.div`
  width: 12.5%;
  height: 100%;
  background-color: ${props => props.color || '#00adb5'};
`;

const RectGraduallyShowLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} speed={speed} color={color} size={size}>
      {/* <RectBig speed={speed} color={color} size={size} /> */}
      <RectSmallWrap speed={speed}>
        {Array.from(Array(8)).map((item, index) => (
          <RectSmall speed={speed} color={color} size={size} key={index} />
        ))}
      </RectSmallWrap>
    </LoadContainer>
  );
};

export default createLoading(RectGraduallyShowLoading)(4);
