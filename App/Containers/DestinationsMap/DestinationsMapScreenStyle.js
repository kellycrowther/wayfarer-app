/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    flex: 1,
  },
  increaseZoom: {
    ...ApplicationStyles.boxShadow,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 40 / 2,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  map: {
    flex: 1,
  },
  mapBoxContainer: {
    flex: 1,
  },
  mapControlIcon: {
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
  },
  mapControls: {
    bottom: 150,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: 200,
    justifyContent: 'space-around',
    position: 'absolute',
    right: 10,
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
