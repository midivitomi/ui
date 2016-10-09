import * as actionsTypes from '../constants/gameListConstants.js';
import _ from 'lodash';

const initialState = {
  gameDescription: {}
}

export default function gameList(state = initialState, action) {
  const {
    gameDescription,
    type
  } = action;

  switch (type) {
    case actionsTypes.UPDATE_GAME_DESCRIPTION:
      return {
        ...state,
        gameDescription
      }

    default:
      return state
  }
}
