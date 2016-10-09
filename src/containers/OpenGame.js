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

          <Title>Описание</Title>
        </Header>

        <Content>
          {
            _.size(gameDescription) ?
            <Grid>
            <Row>
              <Col style={{ backgroundColor: '#6174fa' }}>
                <Text style={styles.center}>{gameDescription.homeTeam}</Text>
                <Text style={styles.center}>{gameDescription.homeTeamCity}</Text>
              </Col>
              <Col style={{ backgroundColor: '#6cc06e' }}>
                <Text style={styles.center}>{gameDescription.homeTeamCount} : {gameDescription.guestTeamCount}</Text>
              </Col>
              <Col style={{ backgroundColor: '#6fc8e0' }}>
                <Text style={styles.center}>{gameDescription.guestTeam}</Text>
                <Text style={styles.center}>{gameDescription.guestTeamCity}</Text>
              </Col>
            </Row>
            <Row>
              <Col style={{ backgroundColor: '#d95d5c' }}>
                <Text style={styles.center}>{gameDescription.date}</Text>
                <Text style={styles.center}>{gameDescription.time}</Text>
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
