import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Alert } from 'react-native'

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const pressButton = () => {
    if (value.trim()) {
      addTodo(value)
      setValue('')
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
      <Button title='add' onPress={pressButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: '#3949ab',
  },
})
