/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { RegisterTypes } from './Actions'

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  username: user,
  password: '',
  email: '',
  phoneNumber: '',
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  username: '',
  password: '',
  email: '',
  phoneNumber: '',
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const fetchUserLoading = (state, { errorMessage }) => ({
  ...state,
  username: '',
  password: '',
  email: '',
  phoneNumber: '',
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [RegisterTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [RegisterTypes.FETCH_USER_FAILURE]: fetchUserFailure,
})
