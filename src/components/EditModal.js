import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TextInput, Button, Alert } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ isVisible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Помилка',
        `Мінімальна довжина 3 символа. Зараз ${title.trim().length} символів.`
      )
    } else {
      onSave(title)
    }
  }
  return (
    <Modal visible={isVisible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder='Введіть текст'
          autoCapitalize='none'
          maxLength={40}
        />
        <View style={styles.button}>
          <Button title='Назад' onPress={onCancel} color={THEME.DANGER_COLOR} />
          <Button title='Редагувати' onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '75%',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
})
