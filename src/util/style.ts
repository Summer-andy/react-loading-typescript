
interface size {
  small: string;
  default: string;
  large: string;
}

interface commonInterFace {
  margin: string;
  position: string;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const commonStyle : commonInterFace = {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

const sizeItem : size = {
  small: '10px',
  default: '12px',
  large: '14px'
}

const sizeContainer : size = {
  small: '24px',
  default: '30px',
  large: '36px'
}

const borderRadiusContainerSize : size = {
  small: '12px',
  default: '15px',
  large: '18px'
}

export  { commonStyle, sizeItem, sizeContainer, borderRadiusContainerSize }
