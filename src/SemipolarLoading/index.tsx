import * as React from 'react';
import styled from 'styled-components';
import { createLoading } from '../utils';
import { rotate } from './animate';

const sizeContainer = {
  small: 40,
  default: 50,
  large: 60
};

const LoadContainer = styled.div`
  width: ${({ size }) => sizeContainer[size]}px;
  height: ${({ size }) => sizeContainer[size]}px;
  position: relative;
  /* overflow: hidden; */
  > div:nth-child(1) {
    height: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 0
    );
    width: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 0
    );
    top: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 0);
    left: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 0);
    animation: ${rotate} ${({ speed }) => speed}s infinite;
    animation-delay: calc(${({ speed }) => speed}s * 0.1 * 4);
    z-index: 5;
  }
  > div:nth-child(2) {
    height: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 1
    );
    width: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 1
    );
    top: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 1);
    left: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 1);
    animation: ${rotate} ${({ speed }) => speed}s infinite;
    animation-delay: calc(${({ speed }) => speed}s * 0.1 * 3);
    z-index: 4;
  }
  > div:nth-child(3) {
    height: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 2
    );
    width: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 2
    );
    top: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 2);
    left: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 2);
    animation: ${rotate} ${({ speed }) => speed}s infinite;
    animation-delay: calc(${({ speed }) => speed}s * 0.1 * 2);
    z-index: 3;
  }
  > div:nth-child(4) {
    height: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 3
    );
    width: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 3
    );
    top: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 3);
    left: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 3);
    animation: ${rotate} ${({ speed }) => speed}s infinite;
    animation-delay: calc(${({ speed }) => speed}s * 0.1 * 1);
    z-index: 2;
  }
  > div:nth-child(5) {
    height: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 4
    );
    width: calc(
      ${({ size }) => sizeContainer[size]}px -
        ${({ size }) => sizeContainer[size]}px * 0.2 * 4
    );
    top: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 4);
    left: calc(${({ size }) => sizeContainer[size]}px * 0.1 * 4);
    animation: ${rotate} ${({ speed }) => speed}s infinite;
    animation-delay: calc(${({ speed }) => speed}s * 0.1 * 0);
    z-index: 1;
  }
`;

const HalfCircle = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  border: calc(${({ size }) => sizeContainer[size]}px * 0.05) solid transparent;
  border-top-color: ${({ color }) => color};
  border-left-color: ${({ color }) => color};
`;

// FIXME 拼写问题
const SemipolarLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} speed={speed} size={size}>
      {Array.from(Array(5)).map((item, index) => (
        <HalfCircle color={color} speed={speed} size={size} key={index} />
      ))}
    </LoadContainer>
  );
};

export default createLoading(SemipolarLoading)(2);
