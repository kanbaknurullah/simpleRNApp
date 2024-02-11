import {ViewStyle} from 'react-native';

export interface IconProps {
  name?: IconName;
  width?: number;
  height?: number;
  fill?: string;
  strokeColor?: string;
  fillOpacity?: number;
  style?: ViewStyle | (ViewStyle | undefined)[];
  testID?: string;
  onPress?: () => void;
  disabled?: boolean;
  clickable?: boolean;
}

export enum IconName {
  PASSWORD_VISIBLE = 'password visible',
  PASSWORD_HIDDEN = 'password hidden',
  BACK = 'back',
  CHEVRON_RIGHT = 'chevron_right',
  CHECK = 'check',
  DONE_POPUP_CLOSE = 'done_popup_close',
}
