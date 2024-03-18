import type { StyleProp, ViewStyle } from 'react-native';

/* eslint-disable-next-line */
export type ButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>;
  text: string;
  OnPress: () => void;
};


