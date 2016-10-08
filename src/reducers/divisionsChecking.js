import * as actionsTypes from '../constants/divisionsCheckingContants.js';
import _ from 'lodash';

const initialState = {
  divisionsList: []
}

export default function divisionsChecking(state = initialState, action) {
  const {
    divisionsList,
    type,
    updatedCheckboxIndex
  } = action;

  switch (type) {
    case actionsTypes.FETCH_DIVISIONS_LIST_SUCCESS:
      return {
        ...state,
        divisionsList
      }

    case actionsTypes.UPDATE_CHECKBOX_CONDITIONS:
      const divisionsListClone = _.cloneDeep(state.divisionsList);
      const currentCheckboxCondition = divisionsListClone[updatedCheckboxIndex].checked;

      divisionsListClone[updatedCheckboxIndex].checked = !currentCheckboxCondition;

      return {
        ...state,
        divisionsList: divisionsListClone
      }
    default:
      return state
  }
}
