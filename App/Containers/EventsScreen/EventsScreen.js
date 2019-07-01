import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Style from './EventsScreenStyle'
import { connect } from 'react-redux'
import EventsActions from 'App/Stores/Events/Actions'
import EventsList from 'App/Components/EventsList/EventsList'
import { EventsPageProps } from '../../Models/EventsModels'

class EventsScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props,
    }
    console.info('~EventsScreen->state', this.state)
  }

  componentDidMount() {
    console.info('EventsScreen->componentDidMount()')
    this.props.getAllEvents()
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.events !== nextProps.events) {
      this.setState({
        events: nextProps.events,
      })
    }
  }

  render() {
    return (
      <View style={Style.container}>
        <EventsList navigation={this.props.navigation} events={this.state.events.events} />
      </View>
    )
  }
}

EventsScreen.propTypes = {
  events: EventsPageProps,
  eventsIsLoading: PropTypes.bool,
  eventsErrorMessage: PropTypes.string,
  getAllEvents: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  events: state.events,
})

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(EventsActions.getAllEvents()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsScreen)
