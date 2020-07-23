import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import { AppText } from '../components/ui/AppText'

export const Todo = ({ todo, removeTodo, onOpen }) => {
  return (
    <TouchableOpacity
      onLongPress={() => removeTodo(todo.id)}
      onPress={() => onOpen(todo.id)}>
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,
    marginBottom: 5,
  },
})
