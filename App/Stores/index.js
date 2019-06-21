import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as LoginReducer } from './Login/Reducers'
import { reducer as RegisterReducer } from './Register/Reducers'
import { reducer as DestinationsMapReducer } from './DestinationsMap/Reducers'
import { reducer as WaypointReducer } from './WaypointDetail/Reducers'
import { reducer as GuestBookReducer } from './GuestBook/Reducers'
import { reducer as EventsReducer } from './Events/Reducers'
import { reducer as AuthReducer } from './Auth/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    login: LoginReducer,
    register: RegisterReducer,
    auth: AuthReducer,
    destination: DestinationsMapReducer,
    waypoint: WaypointReducer,
    guestBooks: GuestBookReducer,
    events: EventsReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
