import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
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
    backgroundColor: Colors.tertiary,
    padding: 10,
  },
  dateTimeContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  description: {
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  subtitle: {
    color: Colors.shade40,
    fontSize: Fonts.size.small,
    marginLeft: 10,
  },
})
