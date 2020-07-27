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
    alignSelf: 'center',
    width: '95%',
    padding: 10,
    borderRadius: 5,
    shadowRadius: 5,
    shadowColor: '#000',
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    elevation: 5,
  },
})
