import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'
import Style from './EventsListStyle'
import { Card, Button } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { EventProps } from 'App/Models/EventsModels'

class EventsList extends React.PureComponent {
  constructor(props) {
    super(props)
    console.info('~EventsList', props)
  }

  renderEvents(props) {
    const events = props
    const eventsList = events.map((event, x) => (
      <Card key={x} title={event.name} image={{ uri: event.photo }}>
        <View style={Style.dateTimeContainer}>
          <Text>Date/Time:</Text>
          <Text style={Style.subtitle}>{event.time}</Text>
        </View>
        <Text style={Style.description}>{event.description}</Text>
        <Button
          icon={<FontAwesome name="calendar" style={Style.buttonIcon} />}
          style={Style.button}
          title="VIEW NOW"
          onPress={() => this.props.navigation.navigate('EventDetailScreen')}
        />
      </Card>
    ))
    return eventsList
  }

  render() {
    const entries = this.renderEvents(this.props.events)
    return (
      <ScrollView contentContainerStyle={Style.scrollContainer} style={Style.container}>
        {entries}
      </ScrollView>
    )
  }
}

EventsList.propTypes = {
  events: EventProps,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default EventsList
