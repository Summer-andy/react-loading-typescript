import * as React from 'react';
import styled from 'styled-components';
import { sizeItem } from '../config';
import { createAnimation, createLoading } from '../utils';
import { load } from './animate';

const Container = styled.div`
  width: 50px;
  height: 50px;
`;

const ItemDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${load} ${({ speed }) => createAnimation(speed)};
`;

const ItemDiv1 = styled(ItemDiv)`
  animation-delay: 0.2s;
`;

const ItemDiv2 = styled(ItemDiv)`
  animation-delay: 0.4s;
`;

const ItemDiv3 = styled(ItemDiv)`
  animation-delay: 0.6s;
`;

const ItemDiv4 = styled(ItemDiv)`
  animation-delay: 0.8s;
`;

const ItemSpan = styled.span`
  position: absolute;
  left: 50%;
  width: ${({ size }) => sizeItem[size]};
  height: ${({ size }) => sizeItem[size]};
  border-radius: 50%;
  margin-top: -10px;
  margin-left: -10px;
  background: ${({ color }) => color};
`;

const CommonLoading = ({ speed, size, style, color }) => {
  return (
    <Container {...{ style, speed, color, size }}>
      <ItemDiv1 speed={speed}>
        <ItemSpan color={color} size={size} />
      </ItemDiv1>
      <ItemDiv2 speed={speed}>
        <ItemSpan color={color} size={size} />
      </ItemDiv2>
      <ItemDiv3 speed={speed}>
        <ItemSpan color={color} size={size} />
      </ItemDiv3>
      <ItemDiv4 speed={speed}>
        <ItemSpan color={color} size={size} />
      </ItemDiv4>
    </Container>
  );
};

export default createLoading(CommonLoading)(2);
