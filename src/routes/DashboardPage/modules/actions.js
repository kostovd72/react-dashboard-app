// import apiFetch from 'utils/apiFetch';
import {
  loadingAction,
} from '../../../store/globalState/global';

import {
  loadDashboard,
  saveDashboard,
} from '../../../services/DashboardService';

import {
  FETCH_DASHBOARDS_INIT,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_FAILURE,
  SEARCH_DASHBOARDS,
} from './types';

export function fetchDashboardsInit() {
  return {
    type: FETCH_DASHBOARDS_INIT,
  };
}

export function fetchDashboardsSuccess(res) {
  return {
    type: FETCH_DASHBOARDS_SUCCESS,
    payload: res,
  };
}

export function fetchDashboardsFailed(error) {
  return {
    type: FETCH_DASHBOARDS_FAILURE,
    payload: error,
  };
}

export function fetchdashboardsAction() {
  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(fetchDashboardsInit());
    return new Promise((resolve) => {
      loadDashboard().then((res) => {
        dispatch(fetchDashboardsSuccess(res));
        dispatch(loadingAction(false));
        resolve(true);
      });
    });
  };
}

export function searchdashboardsAction(key) {
  return {
    type: SEARCH_DASHBOARDS,
    payload: key,
  };
}

export function saveDashboardAction(data, callback) {
  return (dispatch) => {
    dispatch(loadingAction(true));
    return new Promise((resolve) => {
      saveDashboard(data).then((res) => {
        dispatch(loadingAction(false));
        if (callback) {
          callback(res);
        }
        resolve(true);
      });
    });
  };
}
