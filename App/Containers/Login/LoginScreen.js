import React from 'react'
import { View, Button, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
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
    this.props.fetchUser()
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
            <Button onPress={this.props.fetchUser} title="Refresh" />
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
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
