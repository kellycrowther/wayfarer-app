import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { DestinationsMapTypes } from 'App/Stores/DestinationsMap/Actions'
import { AuthTypes } from 'App/Stores/Auth/Actions'
import { EventsTypes } from 'App/Stores/Events/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { getAllWaypoints } from './DestinationMapSaga'
import { login, createUser } from './AuthSaga'
import { getAllEvents } from './EventsSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.CREATE_USER, createUser),
    takeLatest(DestinationsMapTypes.GET_ALL_WAYPOINTS, getAllWaypoints),
    takeLatest(EventsTypes.GET_ALL_EVENTS, getAllEvents),
  ])
}
