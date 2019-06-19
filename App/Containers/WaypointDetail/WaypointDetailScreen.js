import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Dimensions } from 'react-native'
import Style from './WaypointDetailScreenStyle'
import { connect } from 'react-redux'
import { Image } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TabView } from 'react-native-tab-view'
import WaypointDetail from 'App/Components/WaypointDetail/WaypointDetail'
import EventsList from 'App/Components/EventsList/EventsList'
import GuestBookList from 'App/Components/GuestBookList/GuestBookList'

class WaypointDetailScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props,
      index: 0,
      routes: [
        { key: 'about', title: 'About' },
        { key: 'events', title: 'Events' },
        { key: 'guestBook', title: 'Guest Book' },
      ],
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
          <Text style={Style.title}>{this.state.waypoint.title}</Text>
          <Image source={{ uri: this.state.waypoint.photo }} style={Style.heroImage} />
          <View style={Style.likeContainer}>
            <TouchableOpacity style={Style.likeButton}>
              <FontAwesome name="heart" style={Style.likeIcon} />
            </TouchableOpacity>
          </View>
          <View style={Style.ratingContainer}>
            <FontAwesome name="star" style={Style.ratingIcon} />
            <Text style={Style.ratingText}>{this.state.waypoint.rating}</Text>
          </View>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={({ route }) => {
            switch (route.key) {
              case 'about':
                return <WaypointDetail waypointDetail={this.state.waypoint} />
              case 'events':
                return <EventsList events={this.state.waypoint.events} />
              case 'guestBook':
                return <GuestBookList guestBooks={this.state.guestBooks} />
            }
          }}
          onIndexChange={(index) => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </View>
    )
  }
}

WaypointDetailScreen.propTypes = {
  waypoint: PropTypes.shape({
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
        photo: PropTypes.string,
      })
    ),
    id: PropTypes.number,
  }),
  guestBooks: PropTypes.shape({
    guestBookIsLoading: PropTypes.bool,
    guestBookErrorMessage: PropTypes.string,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
        like: PropTypes.number,
        coverPhoto: PropTypes.string,
        photos: PropTypes.arrayOf(PropTypes.string),
        locationID: PropTypes.number,
        id: PropTypes.number,
      })
    ),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  waypoint: state.waypoint,
  guestBooks: state.guestBooks,
})

export default connect(mapStateToProps)(WaypointDetailScreen)
