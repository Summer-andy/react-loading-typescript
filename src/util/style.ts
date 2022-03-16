interface Size {
  small: string;
  default: string;
  large: string;
}

interface CommonInterFace {
  margin: string;
  position: string;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const commonStyle: CommonInterFace = {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

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

export { commonStyle, sizeItem, sizeContainer, borderRadiusContainerSize };
