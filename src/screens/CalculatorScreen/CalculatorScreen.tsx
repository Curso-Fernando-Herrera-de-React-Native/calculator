import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'

const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>
      <Text style={ styles.oldResult }>1,500.00</Text>
      <Text style={ styles.result }>1,500.00</Text>
    </View>
  )
}

export default CalculatorScreen
