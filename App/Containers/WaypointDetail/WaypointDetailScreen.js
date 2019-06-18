/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Dimensions } from 'react-native'
import Style from './WaypointDetailScreenStyle'
import { connect } from 'react-redux'
import { Image } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TabView, SceneMap } from 'react-native-tab-view'

const FirstRoute = () => <View style={[Style.container, { backgroundColor: '#ff4081' }]} />

const SecondRoute = () => <View style={[Style.container, { backgroundColor: '#673ab7' }]} />

class WaypointDetailScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props,
      index: 0,
      routes: [{ key: 'first', title: 'First' }, { key: 'second', title: 'Second' }],
    }
    console.info('STATE: ', this.state.photo)
  }

  componentDidMount() {
    const { navigation } = this.props
    const id = navigation.getParam('id', 'NO-ID')
    console.info('ITEM ID: ', id)
  }

  render() {
    return (
      <View style={Style.container}>
        <View>
          <Text style={Style.title}>Title</Text>
          <Image source={{ uri: this.state.photo }} style={Style.heroImage} />
          <View style={Style.likeContainer}>
            <TouchableOpacity style={Style.likeButton}>
              <FontAwesome name="heart" size={18} color="red" style={Style.likeIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
          })}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </View>
    )
  }
}

WaypointDetailScreen.propTypes = {
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => {
  return state.waypoint
}

export default connect(mapStateToProps)(WaypointDetailScreen)
