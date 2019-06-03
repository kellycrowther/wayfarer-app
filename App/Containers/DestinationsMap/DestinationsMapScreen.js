import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Style from './DestinationsMapScreenStyle'

class DestinationsMapScreen extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    console.info('DestinationsMapScreen->componentDidMount', this.props)
  }

  render() {
    return (
      <View style={Style.container}>
        <Text>Map is working</Text>
      </View>
    )
  }
}

DestinationsMapScreen.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationsMapScreen)
