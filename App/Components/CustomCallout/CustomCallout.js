/* eslint-disable react-native/no-color-literals */
import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Style from './CustomCalloutStyle'

class CustomCallout extends React.PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={Style.container}>
        <View style={Style.textArea}>
          <Text style={Style.textArea_title}>{this.props.title}</Text>
          <Text>{this.props.subtitle}</Text>
        </View>
        <View style={Style.icon}>
          <Icon name="times" size={18} color="black" />
        </View>
      </TouchableOpacity>
    )
  }
}

export default CustomCallout
