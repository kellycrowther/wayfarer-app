/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    height: 300,
    width: 300,
  },
  map: {
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
