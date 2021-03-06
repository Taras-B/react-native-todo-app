import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Alert, Keyboard } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const pressButton = () => {
    if (value.trim()) {
      addTodo(value)
      setValue('')
      Keyboard.dismiss()
    } else {
      Alert.alert('Введіть текст')
    }
  }
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        // TODO: можна скорочений вигляд
        // onChangeText={setValue(text)}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder='Введіть текст'
      />
      <AntDesign.Button name='pluscircleo' onPress={pressButton}>
        Add
      </AntDesign.Button>
      {/* <Button title='add' onPress={pressButton} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  input: {
    width: '65%',
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: '#3949ab',
  },
})
