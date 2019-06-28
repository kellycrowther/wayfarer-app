/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  mapIsLoading: false,
  mapErrorMessage: null,
  activeAnnotationIndex: -1,
  previousActiveAnnotationIndex: -1,

  backgroundColor: 'blue',
  wayPoints: null,
  zoomLevel: 12,
}
