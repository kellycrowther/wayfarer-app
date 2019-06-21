import { put, call } from 'redux-saga/effects'
import AuthActions from 'App/Stores/Auth/Actions'
import { userService } from 'App/Services/UserService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* login(credentials) {
  console.info('AuthSaga->login->credentials: ', credentials)
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(AuthActions.fetchUserLoading())

  // Fetch user informations from an API
  const token = yield call(userService.login, credentials)
  if (token) {
    yield put(AuthActions.fetchUserSuccess(credentials.username, token))
    NavigationService.navigateAndReset('MainScreen')
  } else {
    yield put(AuthActions.fetchUserFailure('There was an error while fetching user informations.'))
  }
}

export function* createUser(newUserData) {
  console.info('AuthSage->createUser', newUserData)
  yield put(AuthActions.fetchUserLoading())

  // Fetch user information from an API
  const token = yield call(userService.createUser, newUserData)
  if (token) {
    yield put(AuthActions.fetchUserSuccess(newUserData.username, token))
    NavigationService.navigateAndReset('MainScreen')
  } else {
    yield put(AuthActions.fetchUserFailure('There was an error while fetching user informations.'))
  }
}
