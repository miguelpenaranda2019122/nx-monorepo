import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: "#F1ECE6",
    width: 300,
    borderTopLeftRadius: 30,
    borderBottomStartRadius: 30,
    paddingStart: 20
  },
  inputCompleted: {
    height: 60,
    backgroundColor: "#F1ECE6",
    width: 300,
    borderRadius: 30,
    paddingStart: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 60,
    width: 65,
    backgroundColor: "#76B7CD",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 30,
    borderBottomEndRadius: 30,
    paddingRight: 3
  } 
});

export default styles;
