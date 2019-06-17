/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  mapIsLoading: false,
  mapErrorMessage: null,
  activeAnnotationIndex: -1,
  previousActiveAnnotationIndex: -1,
  wayPoints: [
    {
      title: 'Welcome to New York',
      subtitle: 'This is a first pin.',
      showCallout: true,
      location: {
        latitude: -73.98330688476561,
        longitude: 40.76975180901395,
      },
      id: 1,
    },
    {
      title: 'Location 2',
      subtitle: 'This is the second pin.',
      showCallout: true,
      location: { latitude: -73.96682739257812, longitude: 40.761560925502806 },
      id: 2,
    },
    {
      title: 'Location 3',
      subtitle: 'This is the third pin.',
      showCallout: true,
      location: { latitude: -74.00751113891602, longitude: 40.746346606483826 },
      id: 3,
    },
    {
      title: 'Location 4',
      subtitle: 'This is the fourth pin.',
      showCallout: true,
      location: {
        latitude: -73.95343780517578,
        longitude: 40.7849607714286,
      },
      id: 4,
    },
    {
      title: 'Location 5',
      subtitle: 'This is the fifth pin.',
      showCallout: true,
      location: { latitude: -73.95343780517578, longitude: 40.7849607714286 },
      id: 5,
    },
  ],
  zoomLevel: 12,
}
