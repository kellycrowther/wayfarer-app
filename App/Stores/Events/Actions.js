import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getAllEvents: null,
  fetchAllEventsSuccess: ['events'],
  fetchAllEventsFailure: null,
})

export const EventsTypes = Types
export default Creators
