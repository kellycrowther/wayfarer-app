import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Style from './EventsScreenStyle'
import { connect } from 'react-redux'

class EventsScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props,
    }
    console.info('~EventsScreen->state', this.state)
  }

  componentDidMount() {
    console.info('EventsScreen->componentDidMount()')
  }

  render() {
    return (
      <View style={Style.container}>
        <Text>Hello, World Events Screen</Text>
      </View>
    )
  }
}

EventsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(EventsScreen)
