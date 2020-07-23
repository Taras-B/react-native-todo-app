import React, { useState } from 'react'

import * as Font from 'expo-font'

import { MainLayout } from './src/MainLayout'
import { TodoState } from './src/context/todo/TodoState'

import { AppLoading } from 'expo'

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false)

  if (!isLoading)
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log('Loading error: ', err)}
        onFinish={() => setIsLoading(true)}
      />
    )

  return (
    <TodoState>
      <MainLayout />
    </TodoState>
  )
}
