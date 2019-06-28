import { put, call } from 'redux-saga/effects'
import DestinationsMapActions from 'App/Stores/DestinationsMap/Actions'
import { waypointService } from 'App/Services/WaypointService'

export function* getAllWaypoints() {
  const waypoints = yield call(waypointService.getAllWaypoints)
  console.info('WaypointSaga->getWaypoints()', waypoints)
  if (waypoints) {
    yield put(DestinationsMapActions.fetchMapSuccess())
  } else {
    yield put(
      DestinationsMapActions.fetchMapFailure('There was an error while fetching user informations.')
    )
  }
}
