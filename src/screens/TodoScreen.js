import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
// import { Todo } from '../components/Todo'

const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title='go home' onPress={goBack} />
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})
