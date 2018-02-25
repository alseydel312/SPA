import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, FormInput, Button } from 'react-native-elements'
import ModalDropdown from 'react-native-modal-dropdown';

export default class DemographicPreferences extends Component {
  static navigationOptions = {
    title: 'Demographic Preferences'
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      age: '0',
      gender: '',
      religious_affiliation: '',
      race: ''
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <List>
        <ListItem
            title={'Age'}
            hideChevron={true}
            leftIcon={{name: 'brightness-7', type: 'materialicon', color: 'blue'}}
            right={this.state.user.username}
            textInput={true}
            textInputPlaceholder={this.state.age}
            textInputOnChangeText={(text) => this.setState({age: text})}
        />
        <ListItem
            title={'Gender'}
            rightIcon={
              <ModalDropdown
                options={['Agender', 'Female', 'Genderfluid', 'Male', 'Trans Man', 'Trans Woman', 'Other']}
                onSelect={(selected) => this.setState({gender: selected})}
              />
            }
        />
        <ListItem
          title={'Regligious Affiliation'}
          rightIcon={
            <ModalDropdown
              options={['Catholic', 'Lutheran', 'Protestant', 'Buddhist', 'Jewish', 'Mormon', 'Other']}
              onSelect={(selected) => this.setState({religious_affiliation: selected})}
            />
          }
        />
        <ListItem
          title={'Race'}
          rightIcon={
            <ModalDropdown
              options={['White', 'African American', 'Natiive American', 'Asian', 'Pacific Islander', 'Other']}
              onSelect={(selected) => this.setState({race: selected})}
            />
          }
        />
      </List>
    )
  }
}