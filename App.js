/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './src/components/login';
import Profile from './src/components/profile';
import SignUp from './src/components/signup';
import DemographicPreferences from './src/components/demographic_preferences';
import SMSMessaging from './src/components/sms_messaging';
import MentalHealthEvaluation from './src/components/mental_health_evaluation';


const Navigator = StackNavigator({
  Login: { screen: Login },
  Profile: { screen: Profile },
  SignUp: { screen: SignUp },
  SMSMessaging: { screen: SMSMessaging },
  DemographicPreferences: { screen: DemographicPreferences },
  MentalHealthEvaluation: { screen: MentalHealthEvaluation }
});

const Tabs = () => {
  return (
    <View>
      <Icon
        name={'support'}
        type={'materialicons'}
      />
      <Icon>

      </Icon>
      <Icon>

      </Icon>
      <Icon>

      </Icon>
    </View>
  );
};


export default class App extends Component<{}> {
  render() {
    return (
      <Navigator />
    );
  }
}