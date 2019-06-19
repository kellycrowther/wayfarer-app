/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  guestBookIsLoading: false,
  guestBookErrorMessage: null,
  entries: [
    {
      title: 'Family Vacation',
      subtitle: 'We had a great time seeing everyone from our family here.',
      description:
        'Selvage copper mug twee food truck, ugh chambray cold-pressed pitchfork everyday carry meh microdosing put a bird on it actually. Wayfarers hexagon cloud bread mixtape, deep v skateboard green juice chartreuse VHS distillery bicycle rights drinking vinegar health goth lomo jean shorts. Ennui taxidermy tilde mumblecore normcore migas, tumblr sartorial fingerstache bushwick offal.',
      likes: 1,
      coverPhoto: 'https://picsum.photos/200/300',
      photos: ['some', 'photo', 'paths'],
      locationID: 5,
      id: 1,
    },
    {
      title: 'Wedding',
      subtitle: 'Wonderful wedding here',
      description:
        'Selvage copper mug twee food truck, ugh chambray cold-pressed pitchfork everyday carry meh microdosing put a bird on it actually. Wayfarers hexagon cloud bread mixtape, deep v skateboard green juice chartreuse VHS distillery bicycle rights drinking vinegar health goth lomo jean shorts. Ennui taxidermy tilde mumblecore normcore migas, tumblr sartorial fingerstache bushwick offal.',
      likes: 1,
      coverPhoto: 'https://picsum.photos/200/300',
      photos: ['some', 'photo', 'paths'],
      locationID: 8,
      id: 2,
    },
  ],
}
