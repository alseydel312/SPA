import React, { Component } from 'react';
import {View} from 'react-native';
import { FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onPressSendMessage = () => {

  };

  render() {
    return (
      <View>
        <FormInput
          onChangeText={(phone) => this.setState({phone: phone})}
          placeholder={'Enter Phone Number'}
        />
        <Button
          title = "Send Code"
          onPress = {this.onPressSendMessage}
        />
      </View>
    )
  }

}