/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  detailScreenIsLoading: false,
  detailScreenErrorMessage: null,
  title: 'Welcome to New York',
  subtitle: 'This is a first pin.',
  description:
    'Selvage copper mug twee food truck, ugh chambray cold-pressed pitchfork everyday carry meh microdosing put a bird on it actually. Wayfarers hexagon cloud bread mixtape, deep v skateboard green juice chartreuse VHS distillery bicycle rights drinking vinegar health goth lomo jean shorts. Ennui taxidermy tilde mumblecore normcore migas, tumblr sartorial fingerstache bushwick offal.',
  rating: 1,
  favorite: 25,
  type: 'Urban',
  photo: 'https://picsum.photos/200/300',
  activities: ['Food', 'Restroom', 'Sightseeing', 'Hiking', 'Photography', 'Nightlife'],
  address: 'Somewhere in New York City',
  city: 'New York',
  zipCode: 99999,
  price: 3,
  events: [
    {
      name: 'The Big Bang Theory!',
      description: 'Learn about the show all millenials love!',
      time: '11/11/2020',
    },
    {
      name: 'Comedy at the Club',
      description: 'Come laugh about current events',
      time: '05/11/2020',
    },
  ],
  id: 1,
}