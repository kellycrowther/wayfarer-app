import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getEvents: null,
  fetchEventsSuccess: null,
  fetchEventsFailure: null,
})

export const EventsTypes = Types
export default Creators
