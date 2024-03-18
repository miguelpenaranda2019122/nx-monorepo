import { ViewStyle, StyleProp, TextStyle } from 'react-native'

export interface CardProps {
    check?: boolean;
    leftField?: string | React.ReactNode;
    title: string;
    cardStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    onPress: () => void;
}