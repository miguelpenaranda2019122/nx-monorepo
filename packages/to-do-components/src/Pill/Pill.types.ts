import type { StyleProp, ViewStyle } from 'react-native';

/* eslint-disable-next-line */
export interface PillProps {
    pressable?: boolean;
    onPress?: () => void;
    pillStyles?: StyleProp<ViewStyle>;
    label: string;
    bgColor: string;
    point?: boolean;
}