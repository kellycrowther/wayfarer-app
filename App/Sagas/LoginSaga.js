import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { userService } from 'App/Services/UserService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* login() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(LoginActions.fetchUserLoading())
  yield call(userService.login)

  // Fetch user informations from an API
  const user = yield call(userService.fetchUser)
  if (user) {
    yield put(LoginActions.fetchUserSuccess(user))
  } else {
    yield put(LoginActions.fetchUserFailure('There was an error while fetching user informations.'))
  }
}
