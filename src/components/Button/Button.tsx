import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styleVariables } from '../../theme/variables'
import { styles } from './styles'

interface Props {
  buttonText: string,
  colorText?: string,
  colorButton?: string,
  largeButton?: boolean,
  action: (text: string) => void
}

const Button = ({
  action,
  buttonText,
  colorButton = styleVariables.darkButton,
  colorText = styleVariables.light,
  largeButton = false }: Props) => {

  return (
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: colorButton, flex: (largeButton) ? 1 : 0 }}
        onPress={() => action( buttonText )}
      >
        <View>
          <Text style={{ ...styles.text, color: colorText }}>{buttonText}</Text>
        </View>
      </TouchableOpacity>
  )

}

export default React.memo(Button)
