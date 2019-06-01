/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  username: '',
  password: '',
  email: '',
  phoneNumber: '',
  userIsLoading: false,
  userErrorMessage: null,
  auth: {
    showSignUpConfirmationModal: true,
    isAuthenticating: false,
    signUpErrorMessage: 'There was an error trying to sign up.',
  },
}
