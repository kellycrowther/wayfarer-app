import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
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
  heroImage: {
    alignSelf: 'stretch',
    height: 200,
  },
  infoContainer: {
    ...ApplicationStyles.screen.container,
    backgroundColor: Colors.primary,
    padding: 10,
  },
  likeButton: {
    ...ApplicationStyles.boxShadow,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 40 / 2,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  likeContainer: {
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: 99,
  },
  likeIcon: {
    color: Colors.error,
    fontSize: 18,
  },
  subheader: {
    ...Fonts.style.h6,
  },
  title: {
    ...Fonts.style.h2,
    ...Fonts.textShadow,
    bottom: 10,
    color: Colors.shade100,
    left: 10,
    position: 'absolute',
    zIndex: 1,
  },
})
