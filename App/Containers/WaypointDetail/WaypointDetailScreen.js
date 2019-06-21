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
import { GuestBooksProps } from 'App/Models/GuestBookModels'
import { WaypointProps } from 'App/Models/WaypointModels'
import { EventsPageProps } from 'App/Models/EventsModels'

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
    console.info('~WaypointDetailScreen->state', this.state)
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
                return <EventsList eventsPage={this.state.eventsPage} />
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
  waypoint: WaypointProps,
  guestBooks: GuestBooksProps,
  eventsPage: EventsPageProps,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  waypoint: state.waypoint,
  guestBooks: state.guestBooks,
  eventsPage: state.events,
})

export default connect(mapStateToProps)(WaypointDetailScreen)
