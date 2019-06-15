import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  increaseZoom: {
    ...ApplicationStyles.boxShadow,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 40 / 2,
    height: 40,
    justifyContent: 'center',
    width: 40,
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
})
