import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.tertiary,
    borderRadius: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  buttonIcon: {
    color: Colors.shade100,
    marginRight: 10,
  },
  container: {
    ...ApplicationStyles.screen.container,
    backgroundColor: Colors.quaternary,
    padding: 10,
  },
  description: {
    marginBottom: 10,
  },
})
