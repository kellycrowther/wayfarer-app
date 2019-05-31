import React from 'react'
import { View, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import LoginActions from 'App/Stores/Login/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './LoginScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class LoginScreen extends React.Component {
  componentDidMount() {
    this.props.login()
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <Input
              placeholder="Username"
              inputStyle={Style.textInput}
              inputContainerStyle={Style.inputContainer}
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <Input
              placeholder="Password"
              inputStyle={Style.textInput}
              inputContainerStyle={Style.inputContainer}
              leftIcon={<Icon name="lock" size={24} color="black" />}
            />
            <Button onPress={this.props.login} title="Login" />
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
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(LoginActions.login()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
