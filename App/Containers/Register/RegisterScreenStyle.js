/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  errorMessage: {
    color: 'transparent',
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginTop: 10,
  },
  greeting: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    marginTop: 20,
  },
  greeting2: {
    color: '#666',
    fontFamily: Fonts.regular,
    fontSize: 24,
    marginTop: 5,
  },
  heading: {
    flexDirection: 'row',
  },
  headingImage: {
    height: 38,
    width: 38,
  },
  inputContainer: {
    marginTop: 20,
  },
  modal: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
