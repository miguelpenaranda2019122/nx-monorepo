import { Image, Text, TouchableOpacity, View } from "react-native";
import { TaskProps } from "./Task.types";
import styles from "./Task.styles";

const Task: React.FunctionComponent<TaskProps> = (props) => {
  
    const { check, taskStyles, title, deletable, 
            rigthPill, underTextPill, textStyles, 
            underlined, handleCheck, navTo, deleteItem
          } = props;

  return (
    <View>
        <View style={[styles.task, taskStyles]}>
            <TouchableOpacity onPress={handleCheck} style={styles.check}>
                <Text style={{ fontSize: 20, color: `${props.check ? "green" : "black"}` }}>
                    {check ? "✓" : ""}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.text, underlined && {borderBottomColor: "#76B7CD", borderBottomWidth: 1}]} onPress={navTo}>
                <Text style={[check ? { textDecorationLine: "line-through", color: "#C5C5C5" } : { textDecorationLine: "none" },textStyles]}>{title}</Text>
            </TouchableOpacity>
            {rigthPill}
            { deletable &&
                <TouchableOpacity onPress={deleteItem}>
                    <Image source={{ uri: 'https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png' }} style={{ width: 12, height: 16 }} />
                </TouchableOpacity>
            }
        </View>
        { underTextPill &&
            <View style={{alignSelf: "flex-start", marginLeft: 30}}>
                {underTextPill}
            </View>
        }
    </View>
  );
}

export default Task;
