import React, { Component } from 'react';
import { Alert, ScrollView, View, Text } from 'react-native';
import { Button, ButtonGroup, List, ListItem } from 'react-native-elements';

export default class MentalHealthEvaluation extends Component {

  static navigationOptions = {
    title: 'Mental Health Evaluation'
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      response: [41]
    };
  }

  updateIndex (question_index, selected_index) {
    new_responses = this.state.response;
    new_responses[question_index] = selected_index;
    this.setState({response: new_responses})
  }

  componentDidMount(){

    this.setState({user: this.props.navigation.state.params.user});

    Alert.alert(
      'Instructions',
      '\nPlease read each statement and circle a number 0, 1, 2, or 3 that indicates how much that statement applied ' +
      'to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement. ' +
      'The rating scale is as follows:\n\n' +
      '0 - Did not apply to me at all\n' +
      '1 - Applied to me some of the time\n' +
      '2 - Applied to me to a considerable degree or a lot of the time\n' +
      '3 - Applied to me very much or most of the time',
      [
        {text: 'Got it!'}
      ],
      { textAlign: 'left' }
    )
  }

  render() {
    const questions = [
      {
        id: 1,
        text: 'I found myself getting upset by quite trivial things.'
      },
      {
        id: 2,
        text: 'I was aware of dryness of my mouth.'
      },
      {
        id: 3,
        text: 'I couldn\'t seem to experience any positive feeling at all'
      },
      {
        id: 4,
        text: 'I experienced breathing difficulty.'
      },
      {
        id: 5,
        text: 'I just couldn\'t seem to get going.'
      },
      {
        id: 6,
        text: 'I tended to over-react to situations.'
      },
      {
        id: 7,
        text: 'I had a feeling of shakiness.'
      },
      {
        id: 8,
        text: 'I found it difficult to relax.'
      },
      {
        id: 9,
        text: 'I was in situations that made me so anxious that I was relieved when they ended.'
      },
      {
        id: 10,
        text: 'I felt that I had nothing to look forward to.'
      },
      {
        id: 11,
        text: 'I found myself getting upset rather easily.'
      },
      {
        id: 12,
        text: 'I felt that I was using a lot of nervous energy.'
      },
      {
        id: 13,
        text: 'I felt sad and depressed.'
      },
      {
        id: 14,
        text: 'I found myself getting impatient when I was delayed in any way.'
      },
      {
        id: 15,
        text: 'I had a feeling of faintness.'
      },
      {
        id: 16,
        text: 'I felt that I had lost interest in just about everything.'
      },
      {
        id: 17,
        text: 'I felt I wasn\'t worth much as a person.'
      },
      {
        id: 18,
        text: 'I felt that I was rather touchy.'
      },
      {
        id: 19,
        text: 'I perspired noticeably in the absence of heat or physical exertion.'
      },
      {
        id: 20,
        text: 'I felt scared without any good reason.'
      },
      {
        id: 21,
        text: 'I felt that life wasn\'t worthwhile.'
      },
      {
        id: 22,
        text: 'I had difficulty in swallowing.'
      },
      {
        id: 23,
        text: 'I couldn\'t seem to get any enjoyment out of the things I did.'
      },
      {
        id: 24,
        text: 'I was aware of the action in my heart in absence of physical exertion.'
      },
      {
        id: 25,
        text: 'I felt down-hearted and blue.'
      },
      {
        id: 26,
        text: 'I found that I was very irritable.'
      },
      {
        id: 27,
        text: 'I felt I was close to panic.'
      },
      {
        id: 28,
        text: 'I found it hard to calm down after something upset me.'
      },
      {
        id: 29,
        text: 'I feared that I would be \'thrown\' by some trivial but unfamiliar task.'
      },
      {
        id: 30,
        text: 'I was unable to become enthusiastic about anything.'
      },
      {
        id: 31,
        text: 'I found it difficult to tolerate interruptions to what I was doing.'
      },
      {
        id: 32,
        text: 'I was in a state of nervous tension.'
      },
      {
        id: 33,
        text: 'I felt I was pretty worthless.'
      },
      {
        id: 34,
        text: 'I was intolerant of anything that kept me from continuing what I was doing.'
      },
      {
        id: 35,
        text: 'I felt terrified.'
      },
      {
        id: 36,
        text: 'I could see nothing in the future to be hopeful about.'
      },
      {
        id: 37,
        text: 'I felt that life was meaningless.'
      },
      {
        id: 38,
        text: 'I found myself getting agitated.'
      },
      {
        id: 39,
        text: 'I was worried I might panic and make a fool of myself.'
      },
      {
        id: 40,
        text: 'I experienced trembling.'
      },
      {
        id: 41,
        text: 'I found it difficult to work up the initiative to do things.'
      },
    ];

    return (
      <ScrollView>
        <List>
          {
            questions.map((item, index) => (
                <ListItem
                  key={item.id}
                  component={ () => {return (
                    <View>
                      <Text>{item.text}</Text>
                      <ButtonGroup
                        onPress={(selectedIndex) => this.updateIndex(index, selectedIndex)}
                        buttons={['1', '2', '3', '4']}
                        selectedIndex={this.state.response[index]}
                      />
                    </View>
                  )}}
                />
            ))
          }
          <Button
            title={'SUBMIT'}
            backgroundColor={'blue'}
            color={'white'}
            onPress={() => this.props.navigation.navigate('Profile', {user: this.state.user})}
          />
        </List>
      </ScrollView>
    )
  }
}