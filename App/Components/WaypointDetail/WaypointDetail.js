/* eslint-disable react-native/no-color-literals */
import React from 'react'
import { View, Text } from 'react-native'
import Style from './WaypointDetailStyle'

class WaypointDetail extends React.PureComponent {
  render() {
    return (
      <View style={Style.container}>
        <Text>Waypoint Detail Screen</Text>
      </View>
    )
  }
}

export default WaypointDetail
