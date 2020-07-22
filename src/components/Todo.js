import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Todo = ({ todo }) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
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
