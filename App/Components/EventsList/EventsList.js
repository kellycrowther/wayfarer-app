import React from 'react'
import { ScrollView, Text } from 'react-native'
import Style from './EventsListStyle'
import { Card, Button } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { EventsPageProps } from 'App/Models/EventsModels'

class EventsList extends React.PureComponent {
  constructor(props) {
    super(props)
    console.info('~EventsList', props)
  }
  render() {
    return (
      <ScrollView style={Style.container}>
        <Card title="HELLO WORLD" image={{ uri: this.props.eventsPage.events[0].photo }}>
          <Text style={Style.description}>
            The idea with React Native Elements is more about component structure than actual
            design.
          </Text>
          <Button
            icon={<FontAwesome name="calendar" style={Style.buttonIcon} />}
            style={Style.button}
            title="VIEW NOW"
          />
        </Card>
      </ScrollView>
    )
  }
}

EventsList.propTypes = {
  eventsPage: EventsPageProps,
}

export default EventsList
