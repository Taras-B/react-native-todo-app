import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View>
      <AddTodo addTodo={addTodo} />

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onOpen={openTodo} removeTodo={removeTodo} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})
