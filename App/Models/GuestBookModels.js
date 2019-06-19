import PropTypes from 'prop-types'

export let GuestBookEntryProps = PropTypes.arrayOf(
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
)

export let GuestBooksProps = PropTypes.shape({
  guestBookIsLoading: PropTypes.bool,
  guestBookErrorMessage: PropTypes.string,
  entries: GuestBookEntryProps,
})
