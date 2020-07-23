// import * as TYPE from '../types'

import { UPDATE_TODO, ADD_TODO, REMOVE_TODO } from '../types'

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          {
            id: Date.now(),
            title: action.payload,
          },
          ...state.todos,
        ],
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title
          }
          return todo
        }),
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    default:
      return state
  }
}
