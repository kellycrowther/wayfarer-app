import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getWaypoint: null,
  getAllWaypoints: null,
  fetchWaypointSuccess: null,
  fetchWaypointFailure: null,
})

export const WaypointTypes = Types
export default Creators
