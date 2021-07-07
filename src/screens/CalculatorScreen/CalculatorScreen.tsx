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
        <Button buttonText={"AC"} colorButton={styleVariables.lighButton} colorText={styleVariables.dark} />
        <Button buttonText={"/"} colorButton={styleVariables.lighButton} colorText={styleVariables.dark} />
        <Button buttonText={"%"} colorButton={styleVariables.lighButton} colorText={styleVariables.dark} />
        <Button buttonText={"+"} colorButton={styleVariables.orangeButton} />
      </View>

      <View style={ styles.row }>
        <Button buttonText={"7"} />
        <Button buttonText={"8"} />
        <Button buttonText={"9"} />
        <Button buttonText={"x"} colorButton={styleVariables.orangeButton} />
      </View>

      <View style={ styles.row }>
        <Button buttonText={"4"} />
        <Button buttonText={"5"} />
        <Button buttonText={"6"} />
        <Button buttonText={"-"} colorButton={styleVariables.orangeButton} />
      </View>

      <View style={ styles.row }>
        <Button buttonText={"1"} />
        <Button buttonText={"2"} />
        <Button buttonText={"3"} />
        <Button buttonText={"+"} colorButton={styleVariables.orangeButton} />
      </View>

      <View style={ styles.row }>
        <Button buttonText={"0"} largeButton={true} />
        <Button buttonText={"."} />
        <Button buttonText={"="} colorButton={styleVariables.orangeButton} />
      </View>

    </View>
  )
}

export default CalculatorScreen
