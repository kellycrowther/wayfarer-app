import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Style from './WaypointDetailStyle'
import ApplicationStyle from 'App/Theme/ApplicationStyles'
import { WaypointProps } from 'App/Models/WaypointModels'

class WaypointDetail extends React.PureComponent {
  render() {
    console.info('PROPS: ', this.props)
    return (
      <View style={Style.container}>
        <View style={Style.headerContainer}>
          <Text style={Style.header}>About</Text>
          <View style={Style.price}>
            <FontAwesome name="dollar" color="white" style={ApplicationStyle.icon} />
            <Text style={Style.priceText}>{this.props.waypointDetail.price}</Text>
          </View>
        </View>
        <View>
          <Text style={Style.subheader}>{this.props.waypointDetail.type}</Text>
          <Text style={Style.description}>{this.props.waypointDetail.description}</Text>
        </View>
        <View>
          <Text style={Style.header}>Address</Text>
          <Text>{this.props.waypointDetail.address}</Text>
          <Text>
            {this.props.waypointDetail.city}, {this.props.waypointDetail.state}{' '}
            {this.props.waypointDetail.zipCode}
          </Text>
        </View>
        <View>
          <Text style={Style.header}>Activities</Text>
          <View style={Style.iconContainer}>
            <FontAwesome name="cutlery" color="white" style={ApplicationStyle.icon} />
          </View>
        </View>
      </View>
    )
  }
}

WaypointDetail.propTypes = {
  waypointDetail: WaypointProps,
}

export default WaypointDetail
