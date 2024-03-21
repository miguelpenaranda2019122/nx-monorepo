import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

/* eslint-disable-next-line */
export type ButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  iconPrompt?: React.ReactNode;
  OnPress: () => void;
};


