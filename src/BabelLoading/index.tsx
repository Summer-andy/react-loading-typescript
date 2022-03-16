import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, borderRadiusContainerSize } from '../config';
import { createAnimation, createLoading } from '../utils';
import { animation } from './animation';

const Container = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
  border-radius: ${({ size }) => borderRadiusContainerSize[size]};
  background: ${({ color }) => color};
  animation: ${animation} ${({ speed }) => createAnimation(speed)};
`;

const BabelLoading = ({ speed, size, style, color }) => {
  return <Container speed={speed} color={color} style={style} size={size} />;
};

export default createLoading(BabelLoading)(2);
