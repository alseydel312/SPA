import React, { Component } from 'react';
import {View} from 'react-native';
import {Icon, Divider, List, ListItem} from 'react-native-elements';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      location_sharing: false
    };
  }

  componentDidMount(){
    this.setState({user: this.props.navigation.state.params.user});
  }

  render() {

    return (
      <View>
        <Icon
          name='user'
          type='evilicon'
          size={200}
        />
        <Divider style={{ backgroundColor: 'blue' }} />
        <List containerStyle={{marginBottom: 20}}>
          <ListItem
            title={'Username'}
            hideChevron={true}
            leftIcon={{name: 'person', type: 'materialicon', color: 'blue'}}
            rightTitle={this.state.user.username}
          />
          <ListItem
            title={'Phone Number'}
            hideChevron={true}
            leftIcon={{name: 'phone', type: 'materialicon', color: 'blue'}}
            rightTitle={this.state.user.phone}
          />
          <ListItem
            title={'Location Sharing'}
            hideChevron={true}
            leftIcon={{name: 'location-on', type: 'materialicon', color: 'blue'}}
            switchButton={true}
            onSwitch={(location_toggle) => this.setState({location_sharing: location_toggle})}
            switched={this.state.location_sharing}
          />
          <ListItem
            title={'SMS Messaging'}
            leftIcon={{name: 'message', type: 'materialicon', color: 'blue'}}
            onPressRightIcon={() => this.props.navigation.navigate('SMSMessaging')}
          />
          <ListItem
            title={'Demographic Sharing'}
            leftIcon={{name: 'share', type: 'materialicon', color: 'blue'}}
            onPressRightIcon={() => this.props.navigation.navigate('DemographicPreferences')}
          />
          <ListItem
            title={'Mental Health Evaluation'}
            leftIcon={{name: 'equalizer', type: 'materialicon', color: 'blue'}}
            onPressRightIcon={() => this.props.navigation.navigate('MentalHealthEvaluation', {user: this.state.user})}
          />
        </List>
      </View>
    )
  }
}