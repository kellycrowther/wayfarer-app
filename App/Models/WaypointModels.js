import PropTypes from 'prop-types'
import { GuestBookEntryProps } from 'App/Models/GuestBookModels'
import { EventProps } from 'App/Models/EventsModels'

export let WaypointProps = PropTypes.shape({
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
  events: EventProps,
  guest_books: GuestBookEntryProps,
  id: PropTypes.number,
})
