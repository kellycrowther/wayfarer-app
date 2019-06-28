import { create } from 'apisauce'
import { Config } from 'App/Config'
import { Platform } from 'react-native'

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

function getAllWaypoints() {
  return wayfarerApiClient.get('waypoints/').then((response) => {
    console.info('WaypointsService->getWaypoints()->response', response)
    if (response.ok) {
      return response.data
    }

    return null
  })
}

export const waypointService = {
  getAllWaypoints,
}
