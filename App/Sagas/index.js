import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { LoginTypes } from 'App/Stores/Login/Actions'
import { RegisterTypes } from 'App/Stores/Register/Actions'
import { DestinationsMapTypes } from 'App/Stores/DestinationsMap/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { login } from './LoginSaga'
import { createUser } from './RegisterSaga'
import { getMap } from './DestinationMapSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    takeLatest(LoginTypes.LOGIN, login),
    takeLatest(RegisterTypes.CREATE_USER, createUser),
    takeLatest(DestinationsMapTypes.GET_MAP, getMap),
  ])
}
