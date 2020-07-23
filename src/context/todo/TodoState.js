import React, { useReducer } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../types'

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [{ id: '1', title: 'якась замітка' }],
  }
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (title) => dispatch({ type: ADD_TODO, payload: title })

  const updateTodo = (id, title) =>
    dispatch({ type: UPDATE_TODO, payload: { id, title } })

  const removeTodo = (id) => dispatch9({ type: REMOVE_TODO, payload: id })

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
