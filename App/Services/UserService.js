import { create } from 'apisauce'
import { Config } from 'App/Config'
import { Platform } from 'react-native'

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */

const userApiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Platform.OS === 'ios' ? Config.API_URL_IOS : Config.API_URL_ANDROID,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

const wayfarerApiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Platform.OS === 'ios' ? Config.API_URL_IOS : Config.API_URL_ANDROID,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
  timeout: 3000,
})

function fetchUser() {
  // Simulate an error 50% of the time just for testing purposes
  if (Math.random() > 0.5) {
    return new Promise(function(resolve, reject) {
      resolve(null)
    })
  }

  let number = Math.floor(Math.random() / 0.1) + 1

  return userApiClient.get(number.toString()).then((response) => {
    if (response.ok) {
      return response.data
    }

    return null
  })
}

function login(credentials) {
  const formData = new FormData()
  formData.append('username', credentials.username)
  formData.append('password', credentials.password)
  // formData.append('username', 'hustle')
  // formData.append('password', 'wayfarerapi')
  return wayfarerApiClient.post('rest-auth/login/', formData).then((response) => {
    console.info('UserService->login->response', response)
    if (response.ok) {
      console.info('UserService->login->data', response.data)
      return response.data
    }

    return null
  })
}

function createUser(newUserData) {
  const formData = new FormData()
  formData.append('username', newUserData.username)
  formData.append('password1', newUserData.password)
  formData.append('password2', newUserData.password)
  formData.append('email', newUserData.email)
  return wayfarerApiClient.post('rest-auth/registration/', formData).then((response) => {
    if (response.ok) {
      console.info('UserService->createUser', response.data)
      return response.data
    }

    return null
  })
}

export const userService = {
  fetchUser,
  login,
  createUser,
}
