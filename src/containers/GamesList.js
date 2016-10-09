import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';

import { Container,
 Button,
 Icon,
 Header,
 Title,
 Content,
 List,
 Spinner,
 ListItem,
 Text
} from 'native-base';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameListActions from '../actions/gameListActions';

@connect(
  state => ({ gamesList: state.divisionsChecking.gamesList }),
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
    const { navigate, fetchGameDescription } = this.props;
    navigate({ type: 'push', key : 'open_game' });

    fetchGameDescription();
  }

  render() {
    const { gamesList } = this.props;

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

        <Content style={{ backgroundColor: '#ffffff' }}>
          {
            gamesList.length ? gamesList.map((gameDate, index) => (
              <List key={index}>
                <ListItem itemDivider style={{ backgroundColor: '#589c6b', paddingTop: 25, paddingBottom: 25 }}>
                  <Text style={{ color: '#ffffff' }}>{gameDate.date}</Text>
                </ListItem>
                {
                  gameDate.gamesItems.map((gameItem, index) => (
                    <ListItem
                      key={index}
                      onPress={this.goToOpenGame.bind(this)}
                      style={{ paddingTop: 20, paddingBottom: 20 }}
                    >
                        <Text>{gameItem.homeTeam} - {gameItem.guestTeam}</Text>
                    </ListItem>
                    )
                  )
                }
              </List>
              )
            ) :
            <Spinner color='blue' />
          }
        </Content>
      </Container>
    );
  }
}
