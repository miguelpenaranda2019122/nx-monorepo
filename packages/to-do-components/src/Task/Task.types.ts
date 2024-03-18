import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface TaskProps {
    title: string;
    check: boolean;
    rigthPill?: React.ReactNode;
    underTextPill?: React.ReactNode;
    deletable?: boolean;
    underlined?: boolean;
    taskStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    handleCheck: () => void;
    deleteItem?: () => void;
    navTo: () => void;
}