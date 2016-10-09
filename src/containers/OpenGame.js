import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Button, Icon, Title, Content, List, ListItem, Text, Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import _ from 'lodash';

const styles = StyleSheet.create({
  center: {
    textAlign : 'center'
  }
});

@connect(
  state => ({ gameList: state.gameList })
)
export default class OpenGame extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  handleBack = () => {
    const { navigate } = this.props;
    navigate({ type: 'pop' });
  };

  render() {
    const gameDescription = this.props.gameList.gameDescription;

    return (
      <Container>
        <Header>
          <Button
            transparent
            onPress={this.handleBack.bind(this)}
          >
            <Icon name='ios-arrow-back' />
          </Button>

          <Title>Описание матча</Title>
        </Header>

        <Content style={{ backgroundColor: '#ffffff' }}>
          {
            _.size(gameDescription) ?
            <Grid>
              <Row style={{ backgroundColor: '#589c6b', paddingTop: 25, paddingBottom: 25 }}>
                <Col>
                  <Text style={{ textAlign : 'center', color: '#ffffff', fontSize: 18, paddingBottom: 10 }}>{gameDescription.date} в {gameDescription.time}</Text>
                  <Text style={{ textAlign : 'center', color: '#ffffff' }}>{gameDescription.city}, cтадион: {gameDescription.place}</Text>
                </Col>
              </Row>
              <Row style={{ paddingTop: 35, paddingBottom: 25 }}>
                <Col>
                  <Text style={{ textAlign : 'center', fontSize: 20, paddingBottom: 5 }}>{gameDescription.homeTeam}</Text>
                  <Text style={{ textAlign : 'center', color: '#959595' }}>{gameDescription.homeTeamCity}</Text>
                </Col>
                <Col>
                  <Text style={{ textAlign : 'center', paddingTop: 21, fontSize: 30 }}>{gameDescription.homeTeamCount} : {gameDescription.guestTeamCount}</Text>
                </Col>
                <Col>
                  <Text style={{ textAlign : 'center', fontSize: 20, paddingBottom: 5 }}>{gameDescription.guestTeam}</Text>
                  <Text style={{ textAlign : 'center', color: '#959595' }}>{gameDescription.guestTeamCity}</Text>
                </Col>
              </Row>
            </Grid> :
          <Spinner color='blue' />
          }
        </Content>
      </Container>
    );
  }
}
