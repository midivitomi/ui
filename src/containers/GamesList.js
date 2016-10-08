import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Icon, Header, Title, Content, List, ListItem, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameListActions from '../actions/gameListActions';

const gamesDates = [
  {
    date : '9 октября 2016',
    gamesItems : [
      {
        homeTeam : 'Газовик',
        guestTeam : 'Факел'
      },
      {
        homeTeam : 'Трактор',
        guestTeam : 'Мастер сварщик'
      }
    ]
  },
  {
    date : '9 октября 2016',
    gamesItems : [
      {
        homeTeam : 'Волга',
        guestTeam : 'Енисей'
      }
    ]
  },
  {
    date : '10 октября 2016',
    gamesItems : [
      {
        homeTeam : 'Сибирь',
        guestTeam : 'Север'
      }
    ]
  }
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00c497'
  }
});

@connect(
  state => ({
    gameList: state.gameList
  }),
  dispatch => bindActionCreators(GameListActions, dispatch)
)
export default class GameList extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  handleBack = () => {
    const { navigate } = this.props;
    navigate({ type: 'pop' });
  };

  goToOpenGame = (gameId) => {
    const { navigate } = this.props;
    navigate({ type: 'push', key : 'open_game' });
  }

  render() {
    return (
      <Container>
        <Header>
          <Button
            transparent
            onPress={this.handleBack.bind(this)}
          >
            <Icon name='ios-arrow-back' />
          </Button>

          <Title>Ближайшие матчи</Title>
        </Header>

        <Content>
          {
            gamesDates.map((gameDate, index) => (
              <List key={index}>
                <ListItem itemDivider style={styles.container}>
                    <Text>{gameDate.date}</Text>
                </ListItem>
                {
                  gameDate.gamesItems.map((gameItem, index) => (
                    <ListItem
                      key={index}
                      onPress={this.goToOpenGame.bind(this)}
                    >
                        <Text>{gameItem.homeTeam} - {gameItem.guestTeam}</Text>
                    </ListItem>
                    )
                  )
                }
              </List>
              )
            )
          }
        </Content>
      </Container>
    );
  }
}
