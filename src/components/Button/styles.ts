import { StyleSheet } from "react-native";
import { styleVariables } from "../../theme/variables";

export const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    height: 70,
    width: 70,
    padding: 10,
    borderRadius: 50,
    backgroundColor: styleVariables.lighButton,
    marginHorizontal: 10
  },

  text: {
    color: styleVariables.light,
    textAlign: "center",
    fontSize: 24
  }
})