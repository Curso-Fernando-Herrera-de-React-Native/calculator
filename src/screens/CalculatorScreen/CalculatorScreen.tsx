import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button/Button'
import { styles } from '../../theme/appTheme'
import { styleVariables } from '../../theme/variables'

const CalculatorScreen = () => {
  const [principalValue, setValue] = useState('0')
  const [memoryValue, setMemoryValue] = useState('0')

  const removeValues = () => {
    setValue('0')
  }

  const addNumbers = (text: string) => {
    setValue(lastValue => lastValue + text)
  }

  return (
    <View style={ styles.calculatorContainer }>

      <Text style={ styles.oldResult }>{memoryValue}</Text>
      <Text style={ styles.result } adjustsFontSizeToFit numberOfLines={1}>{principalValue}</Text>

      <View style={ styles.row }>
        <Button buttonText={"C"} colorButton={styleVariables.lighButton} colorText={styleVariables.dark} action={removeValues} />
        <Button buttonText={"+/-"} colorButton={styleVariables.lighButton} colorText={styleVariables.dark} action={removeValues} />
        <Button buttonText={"del"} colorButton={styleVariables.lighButton} colorText={styleVariables.dark} action={removeValues} />
        <Button buttonText={"+"} colorButton={styleVariables.orangeButton} action={removeValues} />
      </View>

      <View style={ styles.row }>
        <Button buttonText={"7"} action={addNumbers} />
        <Button buttonText={"8"} action={addNumbers} />
        <Button buttonText={"9"} action={addNumbers} />
        <Button buttonText={"x"} colorButton={styleVariables.orangeButton} action={removeValues} />
      </View>

      <View style={ styles.row }>
        <Button buttonText={"4"} action={addNumbers} />
        <Button buttonText={"5"} action={addNumbers} />
        <Button buttonText={"6"} action={addNumbers} />
        <Button buttonText={"-"} colorButton={styleVariables.orangeButton} action={removeValues} />
      </View>

      <View style={ styles.row }>
        <Button buttonText={"1"} action={addNumbers} />
        <Button buttonText={"2"} action={addNumbers} />
        <Button buttonText={"3"} action={addNumbers} />
        <Button buttonText={"+"} colorButton={styleVariables.orangeButton} action={removeValues} />
      </View>

      <View style={ styles.row }>
        <Button buttonText={"0"} action={addNumbers} largeButton={true} />
        <Button buttonText={"."} action={removeValues} />
        <Button buttonText={"="} colorButton={styleVariables.orangeButton} action={removeValues} />
      </View>

    </View>
  )
}

export default CalculatorScreen
