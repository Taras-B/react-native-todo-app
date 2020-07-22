import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { AddTodo } from './src/components/AddTodo'
import { Todo } from './src/components/Todo'
import MainScreen from './src/screens/MainScreen'
import TodoScreen from './src/screens/TodoScreen'

export default function App() {
  const [todos, setTodos] = useState([
    { id: '1', title: 'якась замітка' },
    { id: '2', title: 'треба щось купити' },
  ])
  const [todoId, setTodoId] = useState(null)

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        title,
      },
      ...prev,
    ])
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={(id) => setTodoId(id)}
    />
  )

  if (todoId) {
    const selectTodo = todos.find((todo) => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectTodo} />
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})
