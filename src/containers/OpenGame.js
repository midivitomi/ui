import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Button, Icon, Title, Content, List, ListItem, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';

const gameDate = {
  date : '15.10.2016',
  time : '12:00',
  homeTeam : 'Трактор',
  homeTeamCity : 'Томск',
  homeTeamCount : '5',
  guestTeam : 'Мастер сварщик',
  guestTeamCity : 'Екатеринбург',
  guestTeamCount : '0',
}

const styles = StyleSheet.create({
  center: {
    textAlign : 'center'
  }
});

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

<<<<<<< 718f3dbd687972433d7167c1cf47c4bb48c1ceb6
        <Grid>
          <Col style={{ backgroundColor: '#D954D7', height: 200 }}>1</Col>
          <Col style={{ backgroundColor: '#D93735', height: 200  }}>2</Col>
        </Grid>
=======
        <Content>
          <Grid>
            <Row>
              <Col style={{ backgroundColor: '#6174fa' }}>
                <Text style={styles.center}>{gameDate.homeTeam}</Text>
                <Text style={styles.center}>{gameDate.homeTeamCity}</Text>
              </Col>
              <Col style={{ backgroundColor: '#6cc06e' }}>
                <Text style={styles.center}>{gameDate.homeTeamCount} : {gameDate.guestTeamCount}</Text>
              </Col>
              <Col style={{ backgroundColor: '#6fc8e0' }}>
                <Text style={styles.center}>{gameDate.guestTeam}</Text>
                <Text style={styles.center}>{gameDate.guestTeamCity}</Text>
              </Col>
            </Row>
            <Row>
              <Col style={{ backgroundColor: '#d95d5c' }}>
                <Text style={styles.center}>{gameDate.date}</Text>
                <Text style={styles.center}>{gameDate.time}</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
>>>>>>> upd OpenGame scene
      </Container>
    );
  }
}
