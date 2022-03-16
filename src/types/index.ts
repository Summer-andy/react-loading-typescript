export interface Size {
  small: string;
  default: string;
  large: string;
}

export interface CommonInterFace {
  margin: string;
  position: string;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface LoadingInfo {
  size?: keyof Size;
  color?: string;
  speed?: number;
  style?: object;
  inColor?: string;
}
