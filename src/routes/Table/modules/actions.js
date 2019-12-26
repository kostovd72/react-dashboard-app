// import apiFetch from 'utils/apiFetch';
import {
  loadingAction,
} from 'store/globalState/global';

import {
  loadDashboard,
} from '../../../services/DashboardService';

import {
  FETCH_DASHBOARDS_INIT,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_FAILURE,
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

export default function fetchdashboardsAction() {
  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(fetchDashboardsInit());
    // const rlt = JSON.parse('[{"viewId":"1","name":"Tesla Motors - Vista General","type":"Table"},{"viewId":"2","name":"Tesla Motors - Vista Anual","type":"Graph"},{"viewId":"3","name":"Tesla Motors - Vista por Trimestres","type":"Graph"},{"viewId":"4","name":"Tesla Motors - Vista por Cuatrimestres","type":"Table"},{"viewId":"5","name":"Dashboard Tesla","type":"Table"},{"viewId":"6","name":"Tesla Motors - Vista Anual","type":"Graph"}]');
    // return dispatch(fetchDashboardsSuccess(rlt));
    return new Promise((resolve) => {
      loadDashboard().then((res) => {
        dispatch(fetchDashboardsSuccess(res));
        dispatch(loadingAction(false));
        resolve(true);
      });
    });
  };
}
