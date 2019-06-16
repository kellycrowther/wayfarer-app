/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { WaypointTypes } from './Actions'

export const fetchWaypointSuccess = (state, { user }) => ({
  ...state,
  mapIsLoading: false,
  mapErrorMessage: null,
})

export const fetchWaypointFailure = (state, { errorMessage }) => ({
  ...state,
  mapIsLoading: false,
  mapErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [WaypointTypes.FETCH_WAYPOINT_SUCCESS]: fetchWaypointSuccess,
  [WaypointTypes.FETCH_WAYPOINT_FAILURE]: fetchWaypointFailure,
})
