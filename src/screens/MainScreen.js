import React, { useContext } from 'react'
import { StyleSheet, View, FlatList, Image, Text } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'
import { AppText } from '../components/ui/AppText'

const MainScreen = () => {
  const { addTodo, removeTodo, todos } = useContext(TodoContext)
  const { changeScreen } = useContext(ScreenContext)

  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onOpen={changeScreen} removeTodo={removeTodo} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../../assets/no-items.png')}
        />
        {/* TODO: добавити стилі  */}
        <AppText style={styles.textNotList}>Ще нічого немає</AppText>
      </View>
    )
  }
  return (
    <View>
      <AddTodo addTodo={addTodo} />

      {content}
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 20,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textNotList: {
    marginTop: 20,
    fontSize: 25,
  },
})
