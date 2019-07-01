/**
 * Selectors let us factorize logic that queries the state.
 *
 * Selectors can be used in sagas or components to avoid duplicating that logic.
 *
 * Writing selectors is optional as it is not always necessary, we provide a simple example below.
 */

export const selectorGetWaypoint = (state, id) => {
  if (Object.entries(state.destination.wayPoints).length <= 0) return null

  return state.destination.wayPoints.find((waypoint) => waypoint.id === id)
}
