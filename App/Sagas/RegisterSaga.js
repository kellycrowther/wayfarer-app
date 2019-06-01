import { put, call } from 'redux-saga/effects'
import RegisterActions from 'App/Stores/Register/Actions'
import { userService } from 'App/Services/UserService'

export function* createUser(username, password, email) {
  console.info('saga create user', username)
  yield put(RegisterActions.fetchUserLoading())

  // Fetch user informations from an API
  const token = yield call(userService.createUser, username, password, email)
  if (token) {
    const userInformation = {
      username: username,
      token: token,
    }
    yield put(RegisterActions.fetchUserSuccess(userInformation))
  } else {
    yield put(
      RegisterActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}
