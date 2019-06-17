/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'blue',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  mapBoxContainer: {
    flex: 1,
  },
  marker: {
    flex: 1,
    height: 25,
    resizeMode: 'contain',
    width: 25,
  },
  markerContainer: {
    flex: 1,
  },
  page: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
})
