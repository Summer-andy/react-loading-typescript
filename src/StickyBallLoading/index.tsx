import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, sizeItem } from '../config';
import { createLoading } from '../utils';
import { fly } from './animate';

const LoadContainer = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
`;

const BlurField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
`;

const BallOne = styled.div`
  position: relative;
  z-index: 1;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  border-radius: 100%;
  background-color: ${({ color }) => color};
  animation: ${fly} ${({ speed }) => speed}s 0s infinite;
`;

const BallTwo = styled.div`
  position: relative;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  border-radius: 100%;
  background-color: ${({ inColor }) => inColor || '#f9c094'};
  animation: ${fly} ${({ speed }) => speed}s -${({ speed }) => speed / 2}s infinite;
`;

const StickyBallLoading = ({ speed, size, style, color, inColor }) => {
  return (
    <LoadContainer style={style} size={size}>
      <BlurField>
        <BallOne color={color} speed={speed} size={size} />
        <BallTwo inColor={inColor} speed={speed} size={size} />
      </BlurField>
    </LoadContainer>
  );
};

export default createLoading(StickyBallLoading)(2);
