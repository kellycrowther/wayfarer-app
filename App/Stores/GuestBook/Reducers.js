/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { GuestBookTypes } from './Actions'

export const fetchGuestBookSuccess = (state, { user }) => ({
  ...state,
  mapIsLoading: false,
  mapErrorMessage: null,
})

export const fetchGuestBookFailure = (state, { errorMessage }) => ({
  ...state,
  guestBookIsLoading: false,
  guestBookErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [GuestBookTypes.FETCH_GUEST_BOOK_SUCCESS]: fetchGuestBookSuccess,
  [GuestBookTypes.FETCH_GUEST_BOOK_FAILURE]: fetchGuestBookFailure,
})
