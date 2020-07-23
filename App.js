import React, { useState } from 'react'

import { StyleSheet, View, Alert } from 'react-native'

import * as Font from 'expo-font'

import { Navbar } from './src/components/Navbar'
import MainScreen from './src/screens/MainScreen'
import TodoScreen from './src/screens/TodoScreen'
import { AppLoading } from 'expo'

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

export default function App() {
  const [todos, setTodos] = useState([
    { id: '1', title: 'якась замітка' },
    { id: '2', title: 'треба щось купити' },
  ])
  const [todoId, setTodoId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        title,
      },
      ...prev,
    ])
  }

  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) todo.title = title
        return todo
      })
    )
  }

  const removeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    Alert.alert(
      'Видалення',
      `Ви справді хочете видалити "${todo.title}"`,
      [
        {
          text: 'Ні',
          style: 'cancel',
        },
        {
          text: 'Так',
          onPress: () => {
            setTodoId(null)
            setTodos((prev) => prev.filter((todo) => todo.id !== id))
          },
        },
      ],
      { cancelable: false }
    )
  }

  if (!isLoading)
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log('Loading error: ', err)}
        onFinish={() => setIsLoading(true)}
      />
    )

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
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectTodo}
        updateTodo={updateTodo}
      />
    )
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
