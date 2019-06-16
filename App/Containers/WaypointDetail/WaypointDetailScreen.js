import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import Style from './WaypointDetailScreenStyle'

class WaypointDetailScreen extends React.Component {
  componentDidMount() {
    const { navigation } = this.props
    const id = navigation.getParam('id', 'NO-ID')
    console.info('ITEM ID: ', id)
  }

  render() {
    return (
      <View style={Style.container}>
        <Text>Hello, World</Text>
      </View>
    )
  }
}

WaypointDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default WaypointDetailScreen
