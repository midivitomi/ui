import * as actionsTypes from '../constants/divisionsCheckingContants.js';
import _ from 'lodash';
console.log(actionsTypes);

export function fetchDivisionsList() {
  return function(dispatch, getState) {
    const mockDivisionsList = [
      {
        name: 'РФПЛ'
      },
      {
        name: 'НФЛ'
      },
      {
        name: 'ПФЛ'
      }
    ];

    const extendMockDivisionsList = _.map(
      mockDivisionsList,
      _.unary(_.partialRight(_.assign, { checked: false }))
    );

    setTimeout(() => {
      dispatch({
          type: actionsTypes.FETCH_DIVISIONS_LIST_SUCCESS,
          divisionsList: extendMockDivisionsList
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
