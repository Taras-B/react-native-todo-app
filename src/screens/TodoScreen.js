import React, { useState, useContext } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/ui/AppTextBold'
import { AppButton } from '../components/ui/AppButton'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

const TodoScreen = () => {
  const { updateTodo, removeTodo, todos } = useContext(TodoContext)
  const { changeScreen, todoId } = useContext(ScreenContext)

  const [isModal, setIsModal] = useState(false)
  let todo = todos.find((todo) => todo.id === todoId)
  const updateHandler = (title) => {
    updateTodo(todo.id, title)
    setIsModal(false)
  }

  return (
    <View>
      <EditModal
        onSave={updateHandler}
        value={todo.title}
        isVisible={isModal}
        onCancel={() => setIsModal(false)}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setIsModal(true)}>
          <AntDesign name='edit' size={20} color='#fff' />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={changeScreen.bind(null, null)}>
            <AntDesign name='back' size={20} color='#fff' />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton onPress={() => removeTodo(todo.id)} color={THEME.DANGER_COLOR}>
            <AntDesign name='delete' size={20} color='#fff' />
          </AppButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Dimensions.get('window').width > 400 ? 150 : 100,
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
})

export default TodoScreen
