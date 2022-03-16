import * as React from 'react';
import styled from 'styled-components';
import { sizeItem } from '../config';
import { createLoading, createAnimation } from '../utils';
import { bouncedelay } from './animate';

const LoadContainer = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
`;

const container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const circle = styled.div`
  position: absolute;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  border-radius: 100%;
  background-color: ${({ color }) => color};
  animation: ${bouncedelay}
    ${({ speed }) => createAnimation(speed, 'ease-in-out')};
  animation-fill-mode: both;
`;

const ContainerFirst = styled(container)``;

const ContainerTwo = styled(container)`
  transform: rotateZ(45deg);
`;

const ContainerThree = styled(container)`
  transform: rotateZ(90deg);
`;

const CircleFirst = styled(circle)`
  top: 0;
  left: 0;
`;

const CircleTwo = styled(circle)`
  top: 0;
  right: 0;
  animation-delay: -0.9s;
`;

const CircleThree = styled(circle)`
  right: 0;
  bottom: 0;
  animation-delay: -0.6s;
`;

const CircleFour = styled(circle)`
  left: 0;
  bottom: 0;
  animation-delay: -0.3s;
`;

const CircleFirst1 = styled(circle)`
  top: 0;
  left: 0;
  animation-delay: -1.1s;
`;

const CircleTwo1 = styled(circle)`
  top: 0;
  right: 0;
  animation-delay: -0.8s;
`;

const CircleThree1 = styled(circle)`
  right: 0;
  bottom: 0;
  animation-delay: -0.5s;
`;

const CircleFour1 = styled(circle)`
  left: 0;
  bottom: 0;
  animation-delay: -0.2s;
`;

const CircleFirst2 = styled(circle)`
  top: 0;
  left: 0;
  animation-delay: -1s;
`;

const CircleTwo2 = styled(circle)`
  top: 0;
  right: 0;
  animation-delay: -0.7s;
`;

const CircleThree2 = styled(circle)`
  right: 0;
  bottom: 0;
  animation-delay: -0.4s;
`;

const CircleFour2 = styled(circle)`
  left: 0;
  bottom: 0;
  animation-delay: -0.1s;
`;

const LoopCircleLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style}>
      <ContainerFirst>
        <CircleFirst color={color} size={size} speed={speed} />
        <CircleTwo color={color} size={size} speed={speed} />
        <CircleThree color={color} size={size} speed={speed} />
        <CircleFour color={color} size={size} speed={speed} />
      </ContainerFirst>
      <ContainerTwo>
        <CircleFirst1 color={color} size={size} speed={speed} />
        <CircleTwo1 color={color} size={size} speed={speed} />
        <CircleThree1 color={color} size={size} speed={speed} />
        <CircleFour1 color={color} size={size} speed={speed} />
      </ContainerTwo>
      <ContainerThree>
        <CircleFirst2 color={color} size={size} speed={speed} />
        <CircleTwo2 color={color} size={size} speed={speed} />
        <CircleThree2 color={color} size={size} speed={speed} />
        <CircleFour2 color={color} size={size} speed={speed} />
      </ContainerThree>
    </LoadContainer>
  );
};

export default createLoading(LoopCircleLoading)(1.2);
