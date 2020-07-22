import React from 'react'
import { StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native'

export const EditModal = ({ isVisible, onCancel }) => {
  return (
    <Modal visible={isVisible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput />
        <Button title='Назад' onPress={onCancel} />
        <Button title='Редагувати' />
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
})
