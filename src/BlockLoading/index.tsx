import * as React from 'react';
import styled from 'styled-components';
import {
  Rotate,
  animateFirst,
  animateTwo,
  animateThree,
  animateFour
} from './animate';
import { commonStyle, defaultColor, sizeContainer, sizeItem } from '../config';
import { LoadingInfo } from '../@types';

const LoadContainer = styled.div`
  width: ${({ size }) => sizeContainer[size]};
  height: ${({ size }) => sizeContainer[size]};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  animation: ${Rotate} ${({ speed }) => speed}s infinite ease-in-out;
`;

const Item = styled.div`
  width: ${props => sizeItem[props.size]};
  height: ${props => sizeItem[props.size]};
  margin: auto;
`;

const ItemFirst = styled(Item)`
  animation: ${props => animateFirst(props.color)}
    ${props => props.speed / 4 || 2}s infinite ease-in-out;
`;

const ItemTwo = styled(Item)`
  animation: ${props => animateTwo(props.color)}
    ${props => props.speed / 4 || 2}s infinite ease-in-out;
`;

const ItemThree = styled(Item)`
  animation: ${props => animateThree(props.color)}
    ${props => props.speed / 4 || 2}s infinite ease-in-out;
`;

const ItemFour = styled(Item)`
  animation: ${props => animateFour(props.color)}
    ${props => props.speed / 4 || 2}s infinite ease-in-out;
`;

const BlockLoading: React.FC<LoadingInfo> = ({
  speed = 8,
  size = 'default',
  style = commonStyle,
  color = defaultColor
}) => {
  return (
    <LoadContainer style={style} speed={speed} size={size}>
      <ItemFirst speed={speed} size={size} color={color} />
      <ItemTwo speed={speed} size={size} color={color} />
      <ItemFour speed={speed} size={size} color={color} />
      <ItemThree speed={speed} size={size} color={color} />
    </LoadContainer>
  );
};

export default BlockLoading;
