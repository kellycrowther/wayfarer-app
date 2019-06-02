import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { userService } from 'App/Services/UserService'
import NavigationService from 'App/Services/NavigationService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* login(credentials) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(LoginActions.fetchUserLoading())

  // Fetch user informations from an API
  const token = yield call(userService.login, credentials)
  if (token) {
    const userInformation = {
      username: credentials.credentials.username,
      token: token,
    }
    yield put(LoginActions.fetchUserSuccess(userInformation))
    NavigationService.navigateAndReset('MainScreen')
  } else {
    yield put(LoginActions.fetchUserFailure('There was an error while fetching user informations.'))
  }
}
