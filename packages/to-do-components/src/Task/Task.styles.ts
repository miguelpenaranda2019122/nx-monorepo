import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    task: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    text: {
        height: 30,
        width: 220,
        paddingTop: 6
    },
    check: {
        width: 25,
        height: 25,
        borderRadius: 50,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;
