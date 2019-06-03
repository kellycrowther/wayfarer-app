/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { DestinationsMapTypes } from './Actions'

export const fetchMapSuccess = (state, { user }) => ({
  ...state,
  mapIsLoading: false,
  mapErrorMessage: null,
})

export const fetchMapFailure = (state, { errorMessage }) => ({
  ...state,
  mapIsLoading: false,
  mapErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [DestinationsMapTypes.FETCH_MAP_SUCCESS]: fetchMapSuccess,
  [DestinationsMapTypes.FETCH_MAP_FAILURE]: fetchMapFailure,
})
