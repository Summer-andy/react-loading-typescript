import { FC } from 'react';
import { commonStyle, defaultColor } from '../config';
import { LoadingInfo } from '../types';

export const createLoading = (Loading: FC<LoadingInfo>) => {
  return (defaultSpeed: number) => {
    return ({
      size = 'default',
      style = commonStyle,
      color = defaultColor,
      speed = defaultSpeed
    }: LoadingInfo) => {
      return Loading({
        speed,
        size,
        style,
        color
      });
    };
  };
};

export const createAnimation = (speed: number, timingFunction = 'linear') => {
  return `${speed}s ${timingFunction} infinite`;
};
