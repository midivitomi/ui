import * as actionsTypes from '../constants/gameListConstants.js';
import _ from 'lodash';

export function fetchGameDescription() {
  return function(dispatch, getState) {
    const mockGameDescription = {
      date : '15.10.2016',
      time : '12:00',
      city : 'Воронеж',
      place : 'Труд',
      homeTeam : 'Трактор',
      homeTeamCity : 'Томск',
      homeTeamCount : '5',
      guestTeam : 'Мастер сварщик',
      guestTeamCity : 'Екатеринбург',
      guestTeamCount : '0'
    };

    setTimeout(() => {
      dispatch({
          type: actionsTypes.UPDATE_GAME_DESCRIPTION,
          gameDescription: mockGameDescription
      });
    }, 4000)
  }
}
