/* eslint-disable react-native/no-color-literals */
import React from 'react'
import { View, Text } from 'react-native'
import Style from './EventsListStyle'

class EventsList extends React.PureComponent {
  render() {
    return (
      <View style={Style.container}>
        <Text>Events List Component</Text>
      </View>
    )
  }
}

export default EventsList
