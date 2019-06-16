import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import Style from './WaypointDetailScreenStyle'
import { connect } from 'react-redux'

class WaypointDetailScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props,
    }
    console.info('STATE: ', this.state)
  }

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

const mapStateToProps = (state) => ({
  waypoint: state.waypoint,
})

export default connect(mapStateToProps)(WaypointDetailScreen)
