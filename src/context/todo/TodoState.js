import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../types'
import { ScreenContext } from '../screen/screenContext'
import { Alert } from 'react-native'

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [{ id: '1', title: 'якась замітка' }],
  }
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const { changeScreen } = useContext(ScreenContext)

  const addTodo = (title) => dispatch({ type: ADD_TODO, payload: title })

  const updateTodo = (id, title) =>
    dispatch({ type: UPDATE_TODO, payload: { id, title } })

  const removeTodo = (id) => {
    const todo = state.todos.find((todo) => todo.id === id)
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
            changeScreen(null)
            dispatch({ type: REMOVE_TODO, payload: id })
          },
        },
      ],
      { cancelable: false }
    )
  }

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
