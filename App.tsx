
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import CalculatorScreen from './src/screens/CalculatorScreen/CalculatorScreen'
import { styles } from './src/theme/appTheme'
import { styleVariables } from './src/theme/variables'

const App = () => {
  return (
    <SafeAreaView style={ styles.background }>
      <StatusBar
        backgroundColor={ styleVariables.dark }
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App
