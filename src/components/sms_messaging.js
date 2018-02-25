import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { List, ListItem, CheckBox, Icon } from 'react-native-elements';
import renderIf from './render_if';

export default class SMSMessaging extends Component {
  static navigationOptions = {
    title: 'SMS Messaging Preferences'
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      morning_message: false,
      night_message: false,
      support_message: false,
      customized_message: false,
      checked: [false, false, false, false, false, false, false]
    };
  }

  toggleChecks(day){
    checks = this.state.checked;
    checks[day] = !checks[day];
    this.setState({checked: checks});
  }

  render() {

    return (
        <List containerStyle={{marginBottom: 20}}>
          <ListItem
            title={'Good Morning'}
            hideChevron={true}
            leftIcon={{name: 'brightness-7', type: 'materialicon', color: 'blue'}}
            rightTitle={this.state.user.username}
            switchButton={true}
            onSwitch={(morning_toggle) => this.setState({morning_message: morning_toggle})}
            switched={this.state.morning_message}
          />
          <ListItem
            title={'Goodnight'}
            hideChevron={true}
            leftIcon={{name: 'brightness-2', type: 'materialicon', color: 'blue'}}
            rightTitle={this.state.user.phone}
            switchButton={true}
            onSwitch={(night_toggle) => this.setState({night_message: night_toggle})}
            switched={this.state.night_message}
          />
          <ListItem
            title={'Support Messages'}
            hideChevron={true}
            leftIcon={{name: 'thumb-up', type: 'materialicon', color: 'blue'}}
            switchButton={true}
            onSwitch={(support_toggle) => this.setState({support_message: support_toggle})}
            switched={this.state.support_message}
          />
          { renderIf(this.state.support_message,
          <ListItem
            component={() => {return (
              <View>
                <CheckBox
                  title='Sunday'
                  checked={this.state.checked[0]}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  onIconPress={ () => this.toggleChecks(0)}
                />
                <CheckBox
                  title='Monday'
                  checked={this.state.checked[1]}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  onIconPress={ () => this.toggleChecks(1)}
                />
                <CheckBox
                  title='Tuesday'
                  checked={this.state.checked[2]}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  onIconPress={ () => this.toggleChecks(2)}
                />
                <CheckBox
                  title='Wednesday'
                  checked={this.state.checked[3]}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  onIconPress={ () => this.toggleChecks(3)}
                />
                <CheckBox
                  title='Thursday'
                  checked={this.state.checked[4]}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  onIconPress={ () => this.toggleChecks(4)}
                />
                <CheckBox
                  title='Friday'
                  checked={this.state.checked[5]}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  onIconPress={ () => this.toggleChecks(5)}
                />
                <CheckBox
                  title='Saturday'
                  checked={this.state.checked[6]}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  onIconPress={ () => this.toggleChecks(6)}
                />
              </View>
            )}}
          />
          )}
          <ListItem
            title={'Customized Message'}
            hideChevron={true}
            leftIcon={{name: 'message', type: 'materialicon', color: 'blue'}}
            switchButton={true}
            onSwitch={(customize_toggle) => this.setState({customized_message: customize_toggle})}
            switched={this.state.customized_message}
          />
        </List>
    )
  }
}