/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { EventsTypes } from './Actions'

export const fetchEventsSuccess = (state, { user }) => ({
  ...state,
  eventsIsLoading: false,
  eventsErrorMessage: null,
})

export const fetchEventsFailure = (state, { errorMessage }) => ({
  ...state,
  eventsIsLoading: false,
  eventsErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [EventsTypes.FETCH_EVENTS_SUCCESS]: fetchEventsSuccess,
  [EventsTypes.FETCH_EVENTS_FAILURE]: fetchEventsFailure,
})
