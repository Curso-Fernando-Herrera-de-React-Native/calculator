import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button/Button'
import { styles } from '../../theme/appTheme'
import { styleVariables } from '../../theme/variables'

const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>
      <Text style={ styles.oldResult }>1,500.00</Text>
      <Text style={ styles.result }>1,500.00</Text>

      <View style={ styles.row }>
        <Button buttonText={"AC"} colorButton={styleVariables.lighButton} />
        <Button buttonText={"/"} colorButton={styleVariables.lighButton} />
        <Button buttonText={"%"} colorButton={styleVariables.lighButton} />
        <Button buttonText={"+"} colorButton={styleVariables.orangeButton} />
      </View>
    </View>
  )
}

export default CalculatorScreen
