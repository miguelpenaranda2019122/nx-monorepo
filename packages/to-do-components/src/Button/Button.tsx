import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles';
import type { ButtonProps } from './Button.types';

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { text, buttonStyle, OnPress, textStyle, iconPrompt } = props;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={OnPress}>
      {iconPrompt && iconPrompt}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;