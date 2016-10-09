import * as actionsTypes from '../constants/divisionsCheckingContants.js';
import _ from 'lodash';
import moment from 'moment';
import * as locales from 'moment/min/locales';

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
    let gamesList = [
      {
        date : '2016-10-08 22:53:18',
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
        date : '2016-10-09 22:53:18',
        gamesItems : [
          {
            homeTeam : 'Волга',
            guestTeam : 'Енисей'
          }
        ]
      },
      {
        date : '2016-11-09 22:53:18',
        gamesItems : [
          {
            homeTeam : 'Сибирь',
            guestTeam : 'Север'
          }
        ]
      }
    ];

    function formatDate(date) {
      const matchDate = moment(new Date(date)).locale('ru').format('D MMMM YYYY');
      const matchTime = _.tail(date.split(' ')[1].split(':')).join(':');

      return {
        date: matchDate,
        time: matchTime
      }
    }

    gamesList = _.map(gamesList, _.unary(_.partialRight(_.update, 'date', formatDate)));

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
