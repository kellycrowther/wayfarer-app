import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Style from './WaypointDetailStyle'
import ApplicationStyle from 'App/Theme/ApplicationStyles'

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
  waypointDetail: PropTypes.shape({
    detailScreenIsLoading: PropTypes.bool,
    detailScreenErrorMessage: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    favorite: PropTypes.number,
    type: PropTypes.string,
    photo: PropTypes.string,
    activities: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.number,
    price: PropTypes.number,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        time: PropTypes.string,
      })
    ),
    id: PropTypes.number,
  }),
}

export default WaypointDetail
