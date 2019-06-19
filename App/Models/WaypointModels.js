import PropTypes from 'prop-types'

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
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      time: PropTypes.string,
      photo: PropTypes.string,
    })
  ),
  id: PropTypes.number,
})
