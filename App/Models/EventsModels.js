import PropTypes from 'prop-types'

export let EventProps = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    photo: PropTypes.string,
  })
)

export let EventsPageProps = PropTypes.shape({
  events: EventProps,
  eventsIsLoading: PropTypes.bool,
  eventsErrorMessage: PropTypes.string,
})
