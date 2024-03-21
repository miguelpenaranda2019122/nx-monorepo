import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.PILL_WHITE,
        borderRadius: 20,
        padding: 24,
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        color: Colors.TEXT_PRIMARY
    },
    task_title: {
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "italic",
        letterSpacing: 1
    },
    textarea: {
        height: 200,
        backgroundColor: Colors.BG_TEXTAREA,
        width: 300,
        borderRadius: 10,
        paddingHorizontal: 15
    }
});

export default styles;