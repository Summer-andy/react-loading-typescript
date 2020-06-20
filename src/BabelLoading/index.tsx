import * as React from "react";
import styled, { keyframes } from 'styled-components';
import { commonStyle, sizeContainer, borderRadiusContainerSize } from '../util/style';
import { LoadingInfo } from '../type/index';

const animation = keyframes`
	0% {
		-webkit-transform: scale(0.1);
		opacity: 1;
	}
	50% {
		-webkit-transform: scale(1);
		opacity: 0.5;
	}
	100% {
		-webkit-transform: scale(1.5);
		opacity: 0.1;
	}
`

const Container = styled.div`
  height: ${props => sizeContainer[props.size] || sizeContainer['default']};
  width: ${props => sizeContainer[props.size]|| sizeContainer['default']};
  border-radius:${props => borderRadiusContainerSize[props.size] || borderRadiusContainerSize['default']};
  background:  ${props => props.color || '#00adb5'};
  animation: ${animation}  ${props => props.speed || 2}s linear infinite;
`

const BabelLoading : React.FC<LoadingInfo> = ({ style = commonStyle, speed, color, size = 'default' }) => {
  return (
    <Container {...{style, speed, color, size }} />
  );
};

export default BabelLoading;
