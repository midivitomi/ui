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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#589c6b'
  }
});

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

        <Content>
          {
            gamesList.length ? gamesList.map((gameDate, index) => (
              <List key={index}>
                <ListItem itemDivider style={styles.container}>
                  <Text style={{ color: '#ffffff' }}>{gameDate.date.date}</Text>
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
            ) :
            <Spinner color='blue' />
          }
        </Content>
      </Container>
    );
  }
}
