import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, sizeItem } from '../config';
import { createAnimation, createLoading } from '../utils';
import { scaling, moveTo } from './animate';

const LoadContainer = styled.div`
  width: ${props =>
    props.size === 'small' ? 68 : props.size === 'large' ? 88 : 80}px;
  height: ${props =>
    props.size === 'small' ? 68 : props.size === 'large' ? 88 : 80}px;
  position: relative;
  transform: rotateZ(45deg);

  > div:nth-of-type(1) {
    top: 30%;
    left: 25%;
    animation-delay: 0s;
  }

  > div:nth-of-type(2) {
    top: 10%;
    left: 0;
    animation-delay: 0.8s;
  }

  > div:nth-of-type(3) {
    top: 15%;
    left: 10%;
    animation-delay: 0.5s;
  }

  > div:nth-of-type(4) {
    top: 25%;
    left: 30%;
    animation-delay: 1.6s;
  }

  > div:nth-of-type(5) {
    top: 40%;
    left: 4%;
    animation-delay: 3.2s;
  }

  > div:nth-of-type(6) {
    top: 55%;
    left: 18%;
    animation-delay: 1.2s;
  }

  > div:nth-of-type(7) {
    top: 66%;
    left: 3%;
    animation-delay: 0.4s;
  }

  > div:nth-of-type(8) {
    top: 77%;
    left: 24%;
    animation-delay: 2s;
  }

  > div:nth-of-type(9) {
    top: 83%;
    left: 30%;
    animation-delay: 1s;
  }
`;

const Star = styled.div`
  position: absolute;
  height: 2px;
  border-radius: 50%;
  background: linear-gradient(
    -45deg,
    ${({ color }) => color}, rgba(0, 0, 255, 0)
  );
  animation: ${scaling} ${({ speed }) => createAnimation(speed, 'ease-in-out')},
    ${moveTo} ${({ speed }) => createAnimation(speed, 'ease-in-out')};
`;

const MeteorRainLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} size={size}>
      {Array.from(Array(9)).map((item, index) => (
        <Star color={color} speed={speed} key={index} />
      ))}
    </LoadContainer>
  );
};

export default createLoading(MeteorRainLoading)(3);
