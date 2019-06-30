import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
// import Style from './EventDetailScreenStyle'
// import EventsActions from 'App/Stores/Events/Actions'

export const EventDetailScreenComponent = () => {
  const counter = useSelector((state) => state.counter)
  return (
    <View>
      <Text>Hello, World from Hooks Component</Text>
    </View>
  )
}
