/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  mapIsLoading: false,
  mapErrorMessage: null,
  activeAnnotationIndex: -1,
  previousActiveAnnotationIndex: -1,

  backgroundColor: 'blue',
  coordinates: [
    {
      title: 'My Dynamic Title',
      subtitle: 'This is the subtitle for the callout.',
      showCallout: true,
      coordinate: [-73.99155, 40.73581],
    },
  ],
}
