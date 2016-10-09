import * as actionsTypes from '../constants/divisionsCheckingContants.js';
import _ from 'lodash';

export function fetchDivisionsList() {
  return function(dispatch, getState) {
    fetch('http://localhost:3000/competitions',
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
            .then(
              json => {
                dispatch({
                  type: actionsTypes.FETCH_DIVISIONS_LIST_SUCCESS,
                  divisionsList: json.data
                });
              },
              err => {
                console.error(err);
              }
            );
  }
}

export function fetchGamesList() {
  return function(dispatch, getState) {
    const gamesList = [
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

    setTimeout(() => {
      dispatch({
          type: actionsTypes.FETCH_GAME_LIST_SUCCESS,
          gamesList
      });
    }, 4000)
  }
}

export function toggleCheckbox(checkboxIndex) {
  return {
    type: actionsTypes.UPDATE_CHECKBOX_CONDITIONS,
    updatedCheckboxIndex: checkboxIndex
  }
}
