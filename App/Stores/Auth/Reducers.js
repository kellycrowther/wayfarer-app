/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

export const fetchUserSuccess = (state, action) => ({
  ...state,
  username: action.username,
  password: '',
  email: '',
  phoneNumber: '',
  token: {
    key: action.token.key,
  },
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  username: '',
  password: '',
  email: '',
  phoneNumber: '',
  token: {
    key: '',
  },
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const fetchUserLoading = (state, { errorMessage }) => ({
  ...state,
  username: '',
  password: '',
  email: '',
  phoneNumber: '',
  token: {
    key: '',
  },
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const logout = (state) => ({
  ...state,
  username: '',
  password: '',
  token: {
    key: '',
  },
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [AuthTypes.FETCH_USER_FAILURE]: fetchUserFailure,
  [AuthTypes.LOGOUT]: logout,
})
