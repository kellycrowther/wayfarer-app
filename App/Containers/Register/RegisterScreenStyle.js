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
    Fontsize: 12,
    color: 'transparent',
    fontFamily: Fonts.regular,
    marginTop: 10,
  },
  greeting: {
    Fontsize: 24,
    fontFamily: Fonts.regular,
    marginTop: 20,
  },
  greeting2: {
    Fontsize: 24,
    color: '#666',
    fontFamily: Fonts.regular,
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
