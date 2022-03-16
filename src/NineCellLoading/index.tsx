import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer } from '../config';
import { createLoading, createAnimation } from '../utils';
import { animate } from './animate';

const LoadContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  // width: calc(
  //         ${props =>
    sizeContainer[props.size] || sizeContainer['default']} * 2
  // );
  // height: calc(
  //         ${props =>
    sizeContainer[props.size] || sizeContainer['default']} * 2
  // );
  width: calc(${({ size }) => sizeContainer[size]} * 2);
  height: calc(${({ size }) => sizeContainer[size]} * 2);

  > div:nth-child(2) > div:nth-child(4) {
    animation-delay: ${({ speed }) => speed * (1 / 6)}s;
  }

  > div:nth-of-type(3),
  > div:nth-of-type(5),
  > div:nth-of-type(7) {
    animation-delay: ${({ speed }) => speed / 3}s;
  }

  > div:nth-of-type(6),
  > div:nth-of-type(8) {
    animation-delay: ${({ speed }) => speed / 2}s;
  }

  > div:nth-of-type(9) {
    animation-delay: ${({ speed }) => speed * (2 / 3)}s;
  }
`;

const Item = styled.div`
  width: calc(${({ size }) => sizeContainer[size]} / 4);
  height: calc(${({ size }) => sizeContainer[size]} / 4);
  border-radius: 50%;
  background-color: ${({ color }) => color};
  animation: ${animate} ${({ speed }) => createAnimation(speed, 'ease-in-out')}
    alternate;
`;

// TODO 不知道此处该不该传递 size
const NineCellLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} speed={speed} size={size}>
      {Array.from(Array(9)).map((item, index) => (
        <Item size={size} color={color} speed={speed} key={index} />
      ))}
    </LoadContainer>
  );
};

export default createLoading(NineCellLoading)(1.5);
