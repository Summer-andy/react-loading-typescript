import * as React from 'react';
import styled from 'styled-components';
import { shadow, animate } from './animate';
import { commonStyle, defaultColor, sizeContainer } from '../config';
import { LoadingInfo } from '../@types';

const LoadContainer = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};

  &:before {
    content: '';
    width: ${({ size }) => sizeContainer[size]};
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: calc(${({ size }) => sizeContainer[size]} + 10px);
    left: 0;
    border-radius: 50%;
    animation: ${animate} ${({ speed }) => speed}s linear infinite;
  }

  &:after {
    content: '';
    width: ${({ size }) => sizeContainer[size]};
    height: ${({ size }) => sizeContainer[size]};
    background: ${({ color }) => color};
    animation: ${shadow} ${({ speed }) => speed}s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
`;

const BoxLoading: React.FC<LoadingInfo> = ({
  speed = 0.5,
  size = 'default',
  style = commonStyle,
  color = defaultColor
}) => {
  return (
    <LoadContainer style={style} color={color} speed={speed} size={size} />
  );
};

export default BoxLoading;
