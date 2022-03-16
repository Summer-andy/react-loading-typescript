import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer } from '../config';
import { createLoading } from '../utils';
import { stretchdelay } from './animate';

const LoadContainer = styled.div`
  width: 100px;
  height: ${({ size }) => sizeContainer[size]};
  font-size: 10px;
  text-align: center;
`;

const box = styled.div`
  display: inline-block;
  height: 100%;
  width: 6px;
  margin-left: 5px;
  background-color: ${({ color }) => color};
  animation: ${stretchdelay} ${({ speed }) => speed}s infinite ease-in-out;
`;

const BoxLoadingFirst = styled(box)`
  animation-delay: -1.2s;
`;

const BoxLoadingTwo = styled(box)`
  animation-delay: -1.1s;
`;

const BoxLoadingThree = styled(box)`
  animation-delay: -1s;
`;

const BoxLoadingFour = styled(box)`
  animation-delay: -0.9s;
`;

const BoxLoadingFive = styled(box)`
  animation-delay: -0.8s;
`;

const WaveLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} size={size}>
      <BoxLoadingFirst color={color} speed={speed} />
      <BoxLoadingTwo color={color} speed={speed} />
      <BoxLoadingThree color={color} speed={speed} />
      <BoxLoadingFour color={color} speed={speed} />
      <BoxLoadingFive color={color} speed={speed} />
    </LoadContainer>
  );
};

export default createLoading(WaveLoading)(1.2);
