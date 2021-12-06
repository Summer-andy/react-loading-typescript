import { Size, CommonInterFace } from '../@types';

const sizeItem: Size = {
  small: '10px',
  default: '12px',
  large: '14px'
};

const sizeContainer: Size = {
  small: '24px',
  default: '30px',
  large: '36px'
};

const borderRadiusContainerSize: Size = {
  small: '12px',
  default: '15px',
  large: '18px'
};

const commonStyle: CommonInterFace = {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

const defaultColor = '#00adb5';

export {
  sizeItem,
  sizeContainer,
  borderRadiusContainerSize,
  commonStyle,
  defaultColor
};
