import React from 'react'
import { View, Button, Image, Text, Input, Modal } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './LoginScreenStyle'
import { createUser, confirmUserSignUp } from '../actions'

const initialState = {
  username: '',
  password: '',
  email: '',
  phone_number: '',
  authCode: '',
}

class LoginScreen extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }
  componentDidMount() {
    console.info('LoginScreen->componentDidMount', this.props)
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
    const {
      auth: { showSignUpConfirmationModal, isAuthenticating, signUpErrorMessage },
    } = this.props
    return (
      <View style={Style.container}>
        <View style={Style.heading}>
          <Image
            source={require('../assets/shape.png')}
            style={Style.headingImage}
            resizeMode="contain"
          />
        </View>
        <Text style={Style.greeting}>Welcome,</Text>
        <Text style={Style.greeting2}>sign up to continue</Text>
        <View style={Style.inputContainer}>
          <Input
            value={this.state.username}
            placeholder="User Name"
            type="username"
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.email}
            placeholder="Email"
            type="email"
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            type="password"
            onChangeText={this.onChangeText}
          />
          <Input
            placeholder="Phone Number"
            type="phone_number"
            keyboardType="numeric"
            onChangeText={this.onChangeText}
            value={this.state.phone_number}
          />
        </View>
        <Button title="Sign Up" onPress={this.signUp.bind(this)} isLoading={isAuthenticating} />
        <Text>Error logging in. Please try again.</Text>
        <Text>{signUpErrorMessage}</Text>
        {showSignUpConfirmationModal && (
          <Modal>
            <View style={Style.modal}>
              <Input
                placeholder="Authorization Code"
                type="authCode"
                keyboardType="numeric"
                onChangeText={this.onChangeText}
                value={this.state.authCode}
              />
              <Button
                title="Confirm"
                onPress={this.confirm.bind(this)}
                isLoading={isAuthenticating}
              />
            </View>
          </Modal>
        )}
      </View>
    )
  }
}

LoginScreen.propTypes = {
  auth: PropTypes.object,
  dispatchCreateUser: PropTypes.func,
  dispatchConfirmUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  dispatchConfirmUser: (username, authCode) => confirmUserSignUp(username, authCode),
  dispatchCreateUser: (username, password, email, phoneNumber) =>
    createUser(username, password, email, phoneNumber),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
