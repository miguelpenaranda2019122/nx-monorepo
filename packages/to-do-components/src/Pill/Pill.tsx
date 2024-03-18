import { View, Text, TouchableOpacity } from 'react-native';
import { PillProps } from './Pill.types';
import styles from './Pill.styles';

const Pill: React.FunctionComponent<PillProps> = (props) => {

  const {label, pillStyles, onPress, pressable, bgColor, point} = props;

  if (pressable) {
    return (
      <TouchableOpacity style={[styles.pill, pillStyles]} onPress={onPress}>
          <Text style={styles.pillText}>{label}</Text>
      </TouchableOpacity>
    )
  }

  if (point) {
    return (
      <View style={[styles.pill, pillStyles, {flexDirection: "row", justifyContent: "center", gap: 8}]}>
          <View style={[{backgroundColor: bgColor}, styles.pillPoint]}></View>
          <Text style={styles.pillText}>{label}</Text>
      </View>
    )
  }

  return (
    <View style={[styles.pill, {backgroundColor: bgColor}  ,pillStyles]}>
        <Text style={styles.pillText}>{label}</Text>
    </View>
  )
}

export default Pill;
