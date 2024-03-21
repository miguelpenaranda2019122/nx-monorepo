import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        backgroundColor: Colors.BG_SECONDARY,
        borderRadius: 10,
        borderWidth: 1
    },
    textContainer: {
        justifyContent: "center"
    }
});

export default styles;