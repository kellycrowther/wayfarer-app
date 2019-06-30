import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { EventsTypes } from './Actions'

export const fetchAllEventsSuccess = (state, { events }) => ({
  ...state,
  events: events,
  eventsIsLoading: false,
  eventsErrorMessage: null,
})

export const fetchAllEventsFailure = (state, { errorMessage }) => ({
  ...state,
  eventsIsLoading: false,
  eventsErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [EventsTypes.FETCH_ALL_EVENTS_SUCCESS]: fetchAllEventsSuccess,
  [EventsTypes.FETCH_ALL_EVENTS_FAILURE]: fetchAllEventsFailure,
})
