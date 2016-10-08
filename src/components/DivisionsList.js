import React, { Component, PropTypes } from 'react';

import {
    CheckBox,
    Header,
    List,
    ListItem,
    Text
} from 'native-base';

export default class Counter extends Component {
  render() {
    const { items, onCheckboxClick } = this.props;

    return (
      <List>
        {
          items.map((divisionData, index) => (
            <ListItem key={index}>
              <CheckBox
                checked={divisionData.checked}
                onPress={_.partial(onCheckboxClick, index)}
              />
              <Text>{divisionData.name}</Text>
            </ListItem>
          ))
        }
      </List>
    );
  }
}
