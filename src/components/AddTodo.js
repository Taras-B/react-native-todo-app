import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const pressButton = () => {
    if (value.trim()) {
      addTodo(value)
      setValue('')
    } else {
      console.log('err')
    }
  }
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
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
