import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, List, ListItem, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const gamesDates = [
  {
    date : 'Сегодня',
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
    date : 'Завтра',
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


export default class GameList extends Component {
  render() {
    return (
      <Container>
        <Header>
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
                    <ListItem key={index}>
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
