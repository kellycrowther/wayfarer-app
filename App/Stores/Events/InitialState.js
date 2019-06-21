/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  eventsIsLoading: false,
  eventsErrorMessage: null,
  events: [
    {
      name: 'The Big Bang Theory!',
      description: 'Learn about the show all millenials love!',
      time: '11/11/2020',
      photo: 'https://picsum.photos/200/300',
      id: 1,
    },
    {
      name: 'Comedy at the Club',
      description: 'Come laugh about current events',
      time: '05/11/2020',
      photo: 'https://picsum.photos/200/300',
      id: 2,
    },
  ],
}
