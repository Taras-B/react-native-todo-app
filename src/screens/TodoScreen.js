import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/ui/AppTextBold'
// import { Todo } from '../components/Todo'

const TodoScreen = ({ goBack, todo, onRemove, updateTodo }) => {
  const [isModal, setIsModal] = useState(false)

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
        <Button title='Ред.' onPress={() => setIsModal(true)} />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Назад' onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title='Видалити'
            onPress={() => onRemove(todo.id)}
            color={THEME.DANGER_COLOR}
          />
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
    width: '30%',
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
