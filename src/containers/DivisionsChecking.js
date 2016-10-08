import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import {
    Container,
    Header,
    Title,
    Spinner,
    Content
} from 'native-base';

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
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  handleBack = () => {
    const { navigate } = this.props;
    navigate({ type: 'pop' });
  }

  componentDidMount() {
    this.props.fetchDivisionsList();
  }

  handleCheckboxClick(checkboxIndex) {
    this.props.toggleCheckbox(checkboxIndex)
  }

  render() {
    console.log('tttt', this.props.divisionsChecking);

    const { divisionsList } = this.props.divisionsChecking;

    return (
      <Container>
          <Header>
            <Title>
              Выбор лиги
            </Title>
          </Header>
          <Content>
            {
              divisionsList.length ?
              <DivisionsList
                items={divisionsList}
                onCheckboxClick={this.handleCheckboxClick.bind(this)}
              /> :
              <Spinner color='blue' />
            }
          </Content>
      </Container>
    );
  }
}
