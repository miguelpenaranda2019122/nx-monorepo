import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#F1ECE6',
        borderRadius: 20,
        padding: 24,
        gap: 20,
        alignItems: 'center',
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
        fontWeight: "bold",
        color: "#D98326",
        textTransform: "uppercase",
        textAlign: "center"
    },
    textarea: {
        height: 200,
        backgroundColor: "#ffff",
        width: 300,
        borderRadius: 10,
        paddingHorizontal: 15
    }
});

export default styles;