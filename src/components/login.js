import React, { Component } from 'react';
import {View} from 'react-native';
import { FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onPressLogin = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        if(responseJSON.length > 0) {
          this.props.navigation.navigate('Profile', {user: responseJSON[0]});
        }
      }).done()
  };

  render() {
    return (
      <View>
        <FormInput
          onChangeText={(username) => this.setState({username: username})}
          autoCapitalize={'none'}
          placeholder={'Enter Username'}
        />
        <FormInput
          onChangeText={(password) => this.setState({password: password})}
          autoCapitalize={'none'}
          secureTextEntry={true}
          placeholder={'Enter Password'}
        />
        <Button
          title = "Login"
          onPress = {this.onPressLogin}
        />
        <Button
          title = "Sign up here!"
          backgroundColor = '#FFFFFF'
          color = '#000000'
          onPress = { () => this.props.navigation.navigate('SignUp') }
        />
      </View>
    )
  }

}