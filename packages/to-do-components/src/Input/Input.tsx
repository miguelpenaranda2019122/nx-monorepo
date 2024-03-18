import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { InputProps } from './Input.types';
import styles from "./Input.styles";

const Input: React.FunctionComponent<InputProps> = (props) => {
  
  const { placeholder, onChangeText, defaultValue, inputStyles, buttonOnInput, onPress } = props;

  return (
    <View style={styles.container}>
        <TextInput
                style={[buttonOnInput ? styles.input : styles.inputCompleted ,inputStyles]}
                placeholder={placeholder}
                placeholderTextColor={"#C5C5C5"}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
            />
          {
            buttonOnInput && 
            <TouchableOpacity
                style={[styles.button, inputStyles]}
                onPress={onPress}
            >
                <Text style={{ fontWeight: "bold", color: "white", fontSize: 40 }}>+</Text>
            </TouchableOpacity>
          }
    </View>
  );
}

export default Input;
