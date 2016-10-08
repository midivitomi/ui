import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Button, Icon, Title, Content, List, ListItem, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class OpenGame extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Button transparent>
            <Icon name='ios-arrow-back' />
          </Button>

          <Title>Описание</Title>
        </Header>

        <Grid>
          <Col style={{ backgroundColor: '#D954D7', height: 200 }}>1</Col>
          <Col style={{ backgroundColor: '#D93735', height: 200  }}>2</Col>
        </Grid>
      </Container>
    );
  }
}
