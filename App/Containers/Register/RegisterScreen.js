import React from 'react'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './RegisterScreenStyle'
import { createUser, confirmUserSignUp } from '../../Stores/Register/Actions'
import { TextInput } from 'react-native-gesture-handler'

const initialState = {
  username: '',
  password: '',
  email: '',
  phone_number: '',
  authCode: '',
  auth: {
    showSignUpConfirmationModal: true,
    isAuthenticating: false,
    signUpErrorMessage: 'There was an error trying to sign up.',
  },
}

class RegisterScreen extends React.Component {
  constructor() {
    super()
    this.state = initialState
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
    this.props.dispatchCreateUser(username, password, email, phoneNumber)
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
            onChangeText={this.onChangeText}
          />
          <TextInput
            value={this.state.email}
            placeholder="Email"
            type="email"
            onChangeText={this.onChangeText}
          />
          <TextInput
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            type="password"
            onChangeText={this.onChangeText}
          />
          <TextInput
            placeholder="Phone Number"
            type="phone_number"
            keyboardType="numeric"
            onChangeText={this.onChangeText}
            value={this.state.phone_number}
          />
          <Button
            title="Sign Up"
            onPress={this.signUp.bind(this)}
            isLoading={this.state.auth.isAuthenticating}
          />
        </View>
      </View>
    )
  }
}

RegisterScreen.propTypes = {
  auth: PropTypes.object,
  dispatchCreateUser: PropTypes.func,
  dispatchConfirmUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchConfirmUser: (username) => dispatch(confirmUserSignUp(username)),
  dispatchCreateUser: (username, password, email, phoneNumber) =>
    dispatch(createUser(username, password, email, phoneNumber)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)
