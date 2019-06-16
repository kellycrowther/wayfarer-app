/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    maxWidth: 200,
    minWidth: 150,
    padding: 5,
    top: -10,
    position: 'relative',
    zIndex: 9999,
  },
  icon: {
    flexBasis: '10%',
  },
  textArea: {
    flexBasis: '90%',
  },
  textArea_title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})
