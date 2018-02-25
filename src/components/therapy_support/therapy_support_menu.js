import React, { Component } from 'react';
import {View} from 'react-native';
import {Icon, Divider} from 'react-native-elements';
import { List, ListItem, FormInput, FormValidationMessage, Button } from 'react-native-elements'

let device_width = Dimensions.get('window').width;

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
  }

  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
      }}>
        <View style={{width: device_width/2, backgroundColor: 'powderblue'}}/>
        <View style={{width: device_width/2, backgroundColor: 'skyblue'}}/>
        <View style={{width: device_width/2, backgroundColor: 'steelblue'}}/>
        <View style={{width: device_width/2, backgroundColor: 'white'}}/>
      </View>
    )
  }
}