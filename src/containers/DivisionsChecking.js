import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import {
    Button,
    Container,
    Header,
    Text,
    Title,
    Spinner,
    Content
} from 'native-base';

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  }
});

import DivisionsList from '../components/DivisionsList';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DivisionsCheckingActions from '../actions/divisionsCheckingActions';

@connect(
  state => ({
    divisionsChecking: state.divisionsChecking
  }),
  dispatch => bindActionCreators(DivisionsCheckingActions, dispatch)
)
export default class DivisionsChecking extends Component {
  componentDidMount() {
    this.props.fetchDivisionsList();
  }

  handleButtonPress() {
    const checkedLeaguesIds = _(this.props.divisionsChecking.divisionsList)
      .filter('checked')
      .map('id')
      .value();

    this.props.fetchGamesList(checkedLeaguesIds);

    this.props.navigate({
      type: 'push',
      key : 'games_list'
    });
  }

  handleCheckboxClick(checkboxIndex) {
    this.props.toggleCheckbox(checkboxIndex);
  }

  render() {
    const { divisionsList } = this.props.divisionsChecking;

    const hasCheckedDivisions = _.some(divisionsList, 'checked');

    return (
      <Container>
          <Header>
            <Title>
              Выбор футбольных лиг
            </Title>
          </Header>
          <Content>
            {
              divisionsList.length ?
              <View>
                <DivisionsList
                  items={divisionsList}
                  onCheckboxClick={this.handleCheckboxClick.bind(this)}
                />
                {
                  hasCheckedDivisions ?
                    <Button
                      block
                      info
                      style={styles.button}
                      onPress={this.handleButtonPress.bind(this)}
                    >Показать ближайшие матчи</Button> : null
                }
              </View> :
              <Spinner color='blue' />
            }
          </Content>
      </Container>
    );
  }
}
