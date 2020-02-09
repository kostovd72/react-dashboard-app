import initialState from '../../../store/globalState/initialState';

import {
  FETCH_DASHBOARDS_INIT,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_FAILURE, SEARCH_DASHBOARDS,
} from './types';

export default function dashboardReducer(state = initialState.dashboard, action) {
  switch (action.type) {
    case FETCH_DASHBOARDS_INIT:
      return {
        error: '',
        dashboards: [],
        totalDashboards: [],
      };
    case FETCH_DASHBOARDS_SUCCESS:
      return {
        error: '',
        dashboards: action.payload,
        totalDashboards: action.payload,
      };
    case FETCH_DASHBOARDS_FAILURE:
      return {
        error: action.payload,
        dashboards: [],
        totalDashboards: [],
      };
    case SEARCH_DASHBOARDS: {
      const items = state.totalDashboards.filter((e) => {
        return e.name.toLowerCase().indexOf(action.payload) > -1;
      });
      return { ...state, dashboards: items };
    }
    default:
      return state;
  }
}
