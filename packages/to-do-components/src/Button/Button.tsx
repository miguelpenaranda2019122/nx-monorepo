import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { text, buttonStyle, OnPress } = props;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={OnPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;