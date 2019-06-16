// import { put } from 'redux-saga/effects'
// import ExampleActions from 'App/Stores/Example/Actions'
import NavigationService from 'App/Services/NavigationService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup(data) {
  // Add more operations you need to do at startup here
  // ...

  // When those operations are finished we redirect to the main screen
  // Set app root screen
  const rootScreen = data.token ? 'MainScreen' : 'LoginScreen'
  NavigationService.navigateAndReset(rootScreen)
}
