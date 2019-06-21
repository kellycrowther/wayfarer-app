import React from 'react'
import { View, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AuthActions from 'App/Stores/Auth/Actions'
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

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  handleSubmit() {
    this.props.login(this.state.username, this.state.password)
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
              onChangeText={(text) => this.onChangeText('username', text)}
              placeholder="Username"
              inputStyle={Style.textInput}
              inputContainerStyle={Style.inputContainer}
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <TextInput
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(text) => this.onChangeText('password', text)}
              placeholder="Password"
              inputStyle={Style.textInput}
              inputContainerStyle={Style.inputContainer}
              leftIcon={<Icon name="lock" size={24} color="black" />}
            />
            <Button onPress={() => this.handleSubmit()} title="Login" />
            <Button
              onPress={() => this.props.navigation.navigate('RegisterScreen')}
              title="Register"
            />
            <Button onPress={() => this.props.logout()} title="Logout" />
          </View>
        )}
      </View>
    )
  }
}

LoginScreen.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  login: PropTypes.func,
  logout: PropTypes.func,
  liveInEurope: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  userIsLoading: state.auth.userIsLoading,
  userErrorMessage: state.auth.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(AuthActions.login(username, password)),
  logout: () => dispatch(AuthActions.logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
