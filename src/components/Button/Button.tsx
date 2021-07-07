import React from 'react'
import { Text, View } from 'react-native'
import { styleVariables } from '../../theme/variables'
import { styles } from './styles'

interface Props {
  buttonText: string,
  colorButton?: string
}

const Button = ({ buttonText, colorButton = styleVariables.darkButton }: Props) => {
  return (
    <View style={{ ...styles.button, backgroundColor: colorButton }}>
      <Text style={ styles.text }>{buttonText}</Text>
    </View>
  )
}

export default Button
