/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  heroImage: {
    alignSelf: 'stretch',
    height: 200,
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
  ratingContainer: {
    bottom: 20,
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    zIndex: 99,
  },
  ratingIcon: {
    color: Colors.quinary,
    fontSize: 18,
  },
  ratingText: {
    color: Colors.quinary,
    marginLeft: 5,
  },
  title: {
    ...Fonts.style.h2,
    ...Fonts.textShadow,
    bottom: 10,
    color: 'white',
    left: 10,
    position: 'absolute',
    zIndex: 1,
  },
})
