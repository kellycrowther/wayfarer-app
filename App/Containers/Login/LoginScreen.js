import React from 'react'
import { View, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import LoginActions from 'App/Stores/Login/Actions'
import Style from './LoginScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-gesture-handler'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class LoginScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  componentDidMount() {
    console.info('LoginScreen->componentDidMount', this.props)
  }

  setPassword(password) {
    password = password.toLowerCase()
    this.setState({ password: password })
  }

  setUserName(username) {
    username = username.toLowerCase()
    this.setState({ username: username })
  }

  handleSubmit() {
    this.props.login(this.state)
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <TextInput
              autoCapitalize="none"
              onChangeText={(text) => this.setUserName(text)}
              placeholder="Username"
              inputStyle={Style.textInput}
              inputContainerStyle={Style.inputContainer}
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <TextInput
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(text) => this.setPassword(text)}
              placeholder="Password"
              inputStyle={Style.textInput}
              inputContainerStyle={Style.inputContainer}
              leftIcon={<Icon name="lock" size={24} color="black" />}
            />
            <Button onPress={() => this.handleSubmit()} title="Login" />
          </View>
        )}
      </View>
    )
  }
}

LoginScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  login: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.login.user,
  userIsLoading: state.login.userIsLoading,
  userErrorMessage: state.login.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(LoginActions.login(credentials)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
