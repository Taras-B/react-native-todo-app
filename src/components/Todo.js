import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, removeTodo, onOpen }) => {
  return (
    <TouchableOpacity
      onLongPress={() => removeTodo(todo.id)}
      onPress={() => onOpen(todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
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
