import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getGuestBooks: null,
  fetchGuestBookSuccess: null,
  fetchGuestBookFailure: null,
})

export const GuestBookTypes = Types
export default Creators
