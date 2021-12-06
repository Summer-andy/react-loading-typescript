import * as React from 'react';
import styled from 'styled-components';
import { LoadingInfo } from '../@types';
import {
  commonStyle,
  sizeContainer,
  borderRadiusContainerSize
} from '../config';
import { animation } from './animation';

const Container = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
  border-radius: ${({ size }) => borderRadiusContainerSize[size]};
  background: ${({ color }) => color};
  animation: ${animation} ${({ speed }) => speed}s linear infinite;
`;

const BabelLoading: React.FC<LoadingInfo> = ({
  speed = 2,
  color = '#00adb5',
  size = 'default',
  style = commonStyle
}) => {
  return <Container {...{ style, speed, color, size }} />;
};

export default BabelLoading;
