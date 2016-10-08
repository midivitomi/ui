import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Home extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  toGamesList = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'games_list',
    });
  }

  toOpenGame = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'open_game',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Boilerplate!
        </Text>
        <TouchableOpacity onPress={this.toGamesList}>
          <Text style={styles.instructions}>GamesList</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toOpenGame}>
          <Text style={styles.instructions}>OpenGame</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
