import * as actionsTypes from '../constants/divisionsCheckingContants.js';
import _ from 'lodash';
console.log(actionsTypes);

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

// export function fetchDivisionsList2() {
//   return function(dispatch, getState) {
//     const mockDivisionsList = [
//       {
//         name: 'РФПЛ',
//         id: 1
//       },
//       {
//         name: 'НФЛ',
//         id: 2
//       },
//       {
//         name: 'ПФЛ',
//         id: 3
//       }
//     ];

//     const extendMockDivisionsList = _.map(
//       mockDivisionsList,
//       _.unary(_.partialRight(_.assign, { checked: false }))
//     );

//     setTimeout(() => {
//       dispatch({
//           type: actionsTypes.FETCH_DIVISIONS_LIST_SUCCESS,
//           divisionsList: extendMockDivisionsList
//       });
//     }, 4000)
//   }
// }

export function fetchTeamsList() {
  return function(dispatch, getState) {
    const mockTeamsList = [
      {
        leagueId: 1,
        leagueTeams: [
          {
            teamName: 'Динамо',
            teamId: 1
          },
          {
            teamName: 'Локомотив',
            teamId: 2
          },
          {
            teamName: 'Торпедо',
            teamId: 3
          }
        ]
      },
      {
        leagueId: 2,
        leagueTeams: [
          {
            teamName: 'Сокол',
            teamId: 4
          },
          {
            teamName: 'Волгарь',
            teamId: 5
          },
          {
            teamName: 'Тосно',
            teamId: 6
          }
        ]
      }
    ];

    setTimeout(() => {
      dispatch({
          type: actionsTypes.FETCH_TEAMS_LIST_SUCCESS,
          teamsList: mockTeamsList
      });
    }, 7000)
  }
}

export function toggleCheckbox(checkboxIndex) {
  return {
    type: actionsTypes.UPDATE_CHECKBOX_CONDITIONS,
    updatedCheckboxIndex: checkboxIndex
  }
}
