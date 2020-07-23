import React from 'react'
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { AppTextBold } from './AppTextBold'
import { THEME } from '../../theme'

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
  return (
    <Wrapper activeOpacity={0.7} onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold>{children}</AppTextBold>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
