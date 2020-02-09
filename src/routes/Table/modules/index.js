import initialState from '../../../store/globalState/initialState';

import {
  FETCH_DASHBOARDS_INIT,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_FAILURE,
} from './types';

export default function dashboardReducer(state = initialState.dashboard, action) {
  switch (action.type) {
    case FETCH_DASHBOARDS_INIT:
      return {
        error: '',
        dashboards: [],
      };
    case FETCH_DASHBOARDS_SUCCESS:
      return {
        error: '',
        dashboards: action.payload,
      };
    case FETCH_DASHBOARDS_FAILURE:
      return {
        error: action.payload,
        dashboards: [],
      };
    default:
      return state;
  }
}
