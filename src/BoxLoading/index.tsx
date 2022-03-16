import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer } from '../config';
import { createLoading, createAnimation } from '../utils';
import { shadow, animate } from './animate';

const LoadContainer = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};

  &::before {
    content: '';
    position: absolute;
    top: calc(${({ size }) => sizeContainer[size]} + 10px);
    left: 0;
    width: ${({ size }) => sizeContainer[size]};
    height: 5px;
    border-radius: 50%;
    background: #000;
    opacity: 0.1;
    animation: ${animate} ${({ speed }) => createAnimation(speed)};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ size }) => sizeContainer[size]};
    height: ${({ size }) => sizeContainer[size]};
    border-radius: 3px;
    background: ${({ color }) => color};
    animation: ${shadow} ${({ speed }) => createAnimation(speed)};
  }
`;

const BoxLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} color={color} speed={speed} size={size} />
  );
};

export default createLoading(BoxLoading)(0.5);
