import * as React from 'react';
import styled from 'styled-components';
import { sizeContainer, sizeItem } from '../config';
import { createLoading, createAnimation } from '../utils';
import {
  Rotate,
  animateFirst,
  animateTwo,
  animateThree,
  animateFour
} from './animate';

const LoadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
  animation: ${Rotate} ${({ speed }) => createAnimation(speed, 'ease-in-out')};
`;

const Item = styled.div`
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  margin: auto;
`;

const ItemFirst = styled(Item)`
  animation: ${({ color }) => animateFirst(color)}
    ${({ speed }) => createAnimation(speed / 4, 'ease-in-out')};
`;

const ItemTwo = styled(Item)`
  animation: ${({ color }) => animateTwo(color)}
    ${({ speed }) => createAnimation(speed / 4, 'ease-in-out')};
`;

const ItemThree = styled(Item)`
  animation: ${({ color }) => animateThree(color)}
    ${({ speed }) => createAnimation(speed / 4, 'ease-in-out')};
`;

const ItemFour = styled(Item)`
  animation: ${({ color }) => animateFour(color)}
    ${({ speed }) => createAnimation(speed / 4, 'ease-in-out')};
`;

// TODO InColor 等待启用
const BlockLoading = ({ speed, size, style, color }) => {
  return (
    <LoadContainer style={style} speed={speed} size={size}>
      <ItemFirst speed={speed} size={size} color={color} />
      <ItemTwo speed={speed} size={size} color={color} />
      <ItemThree speed={speed} size={size} color={color} />
      <ItemFour speed={speed} size={size} color={color} />
    </LoadContainer>
  );
};

export default createLoading(BlockLoading)(8);
