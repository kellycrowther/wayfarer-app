import { put, call } from 'redux-saga/effects'
import EventsActions from 'App/Stores/Events/Actions'
import { eventsService } from 'App/Services/EventsService'

export function* getAllEvents() {
  const events = yield call(eventsService.getAllEvents)
  console.info('EventsSaga->getAllEvents()', events)
  if (events) {
    yield put(EventsActions.fetchAllEventsSuccess(events))
  } else {
    yield put(EventsActions.fetchAllEventsFailure('There was an error while fetching the events.'))
  }
}
