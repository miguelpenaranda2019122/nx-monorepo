import type { StyleProp, ViewStyle } from 'react-native';

/* eslint-disable-next-line */
export interface InputProps {
  placeholder: string;
  onChangeText: (arg0: string) => void; 
  defaultValue: string;
  inputStyles?: StyleProp<ViewStyle>;
  buttonOnInput?: boolean;
  onPress?: () => void;
}