import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { AddTodo } from './src/components/AddTodo'
import { Todo } from './src/components/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        title,
      },
      ...prev,
    ])
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})
