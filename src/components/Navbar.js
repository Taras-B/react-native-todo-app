import React from 'react'
import { View, StyleSheet } from 'react-native'

import { AppTextBold } from '../components/ui/AppTextBold'

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>Todo App</AppTextBold>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    // fontWeight: 'bold',
  },
})
