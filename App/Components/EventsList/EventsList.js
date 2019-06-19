import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text } from 'react-native'
import Style from './EventsListStyle'
import { Card, Button } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class EventsList extends React.PureComponent {
  constructor() {
    super()
    console.info('~EventsList')
  }
  render() {
    return (
      <ScrollView style={Style.container}>
        <Card title="HELLO WORLD" image={this.props.events[0].photo}>
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
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      time: PropTypes.string,
      photo: PropTypes.string,
    })
  ),
}

export default EventsList
