import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Style from './MapControlsStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

class MapControls extends React.PureComponent {
  static propTypes = {
    increaseZoom: PropTypes.func,
    decreaseZoom: PropTypes.func,
    removeMarkers: PropTypes.func,
  }

  render() {
    return (
      <View style={Style.mapControls}>
        <TouchableOpacity onPress={this.props.increaseZoom} style={Style.increaseZoom}>
          <FontAwesome
            name="plus"
            size={Style.mapControlIcon.size}
            color="white"
            style={Style.mapControlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.decreaseZoom} style={Style.increaseZoom}>
          <FontAwesome
            name="minus"
            size={Style.mapControlIcon.size}
            color="white"
            style={Style.mapControlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.removeMarkers} style={Style.increaseZoom}>
          <FontAwesome
            name="trash"
            size={Style.mapControlIcon.size}
            color="white"
            style={Style.mapControlIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default MapControls
