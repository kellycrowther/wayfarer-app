import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Fonts from 'App/Theme/Fonts'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    backgroundColor: Colors.primary,
    padding: 10,
  },
  description: {
    fontStyle: 'italic',
    marginTop: 10,
  },
  header: {
    ...Fonts.style.h2,
    marginTop: 10,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginTop: 10,
  },
  price: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  priceText: {
    ...Fonts.style.h4,
    color: Colors.shade100,
  },
  subheader: {
    ...Fonts.style.h6,
  },
})
