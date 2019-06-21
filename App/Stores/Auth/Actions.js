import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Login with user information
  login: ['username', 'password'],
  // Create User
  createUser: ['username', 'password', 'email', 'phoneNumber'],
  // Confirm User will sign up
  confirmUserSignUp: ['username'],
  // Logout
  logout: null,
  // User informations were successfully fetched
  fetchUserSuccess: ['username', 'token'],
  // An error occurred
  fetchUserFailure: ['errorMessage'],
  fetchUserLoading: null,
})

export const AuthTypes = Types
export default Creators
