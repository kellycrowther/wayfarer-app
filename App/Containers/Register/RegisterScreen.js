import React from 'react'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './RegisterScreenStyle'
import RegisterActions from '../../Stores/Register/Actions'
import { TextInput } from 'react-native-gesture-handler'

class RegisterScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      email: '',
      phoneNumber: '',
      authCode: '',
      auth: {
        showSignUpConfirmationModal: true,
        isAuthenticating: false,
        signUpErrorMessage: 'There was an error trying to sign up.',
      },
    }
  }
  componentDidMount() {
    console.info('RegisterScreen->componentDidMount', this.props)
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  signUp() {
    const { username, password, email, phoneNumber } = this.state
    console.info('SIGN UP: ', username)
    console.info('password: ', password)
    this.props.createUser(username, password, email, phoneNumber)
  }

  confirm() {
    const { authCode, username } = this.state
    this.props.dispatchConfirmUser(username, authCode)
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.heading}>
          <Image resizeMode="contain" />
        </View>
        <Text style={Style.greeting}>Welcome,</Text>
        <Text style={Style.greeting2}>sign up to continue</Text>
        <View style={Style.inputContainer}>
          <TextInput
            value={this.state.username}
            placeholder="User Name"
            type="username"
            autoCapitalize="none"
            onChangeText={(text) => this.onChangeText('username', text)}
          />
          <TextInput
            value={this.state.email}
            placeholder="Email"
            type="email"
            autoCapitalize="none"
            onChangeText={(text) => this.onChangeText('email', text)}
          />
          <TextInput
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            type="password"
            autoCapitalize="none"
            onChangeText={(text) => this.onChangeText('password', text)}
          />
          <TextInput
            placeholder="Phone Number"
            type="phone_number"
            keyboardType="numeric"
            autoCapitalize="none"
            onChangeText={(text) => this.onChangeText('phoneNumber', text)}
            value={this.state.phoneNumber}
          />
          <Button
            title="Sign Up"
            onPress={() => this.signUp()}
            isLoading={this.state.auth.isAuthenticating}
          />
        </View>
      </View>
    )
  }
}

RegisterScreen.propTypes = {
  auth: PropTypes.object,
  createUser: PropTypes.func,
  dispatchConfirmUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchConfirmUser: (username) => dispatch(RegisterActions.confirmUserSignUp(username)),
  createUser: (username, password, email, phoneNumber) =>
    dispatch(RegisterActions.createUser(username, password, email, phoneNumber)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)
