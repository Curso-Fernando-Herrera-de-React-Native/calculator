import { StyleSheet } from "react-native";
import { styleVariables } from './variables'

export const styles = StyleSheet.create({

  text: {
    color: styleVariables.light
  },

  background: {
    flex: 1,
    backgroundColor: styleVariables.dark
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },

  result: {
    fontSize: 60,
    textAlign: 'right',
    color: styleVariables.light
  },

  oldResult: {
    fontSize: 30,
    color: styleVariables.ligthOpacity,
    textAlign: 'right'
  },

  row: {
    flexDirection: "row",
    justifyContent: "center"
  }
})