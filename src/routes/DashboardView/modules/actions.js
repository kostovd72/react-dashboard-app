// import apiFetch from 'utils/apiFetch';
import {
  loadingAction,
} from '../../../store/globalState/global';

import {
  loadDashboardView,
  loadOptions,
  loadDashboard,
  saveGraph, saveDashboard,
  loadFilters,
  // deleteGraph,
} from '../../../services/DashboardService';

import {
  FETCH_DASHBOARD_INIT,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
  FETCH_TYPEOPTIONS_SUCCESS,
  FETCH_TABLEOPTIONS_SUCCESS,
  DASHBOARD_CHANGED_SUCCESS,
  MODAL_CANCELLED,
  SAVE_GRAPH_SUCCESS,
  DELETE_GRAPH_SUCCESS,
  LAYOUT_CHANGED_SUCCESS,
  GET_FILTERS,
} from './types';

export function fetchDashboardsInit() {
  return {
    type: FETCH_DASHBOARD_INIT,
  };
}

export function fetchDashboardsSuccess(res) {
  return {
    type: FETCH_DASHBOARD_SUCCESS,
    payload: res,
  };
}

export function fetchDashboardsFailed(error) {
  return {
    type: FETCH_DASHBOARD_FAILURE,
    payload: error,
  };
}

export function loadTypeOptionsSuccess(res) {
  return {
    type: FETCH_TYPEOPTIONS_SUCCESS,
    payload: res,
  };
}

export function loadTableOptionsSuccess(res) {
  return {
    type: FETCH_TABLEOPTIONS_SUCCESS,
    payload: res,
  };
}

export function dashboardChangeSuccess(res) {
  return {
    type: DASHBOARD_CHANGED_SUCCESS,
    payload: res,
  };
}

export function loadTypeOptionsAction() {
  return (dispatch) => {
    dispatch(loadingAction(true));
    return new Promise((resolve) => {
      loadOptions().then((res) => {
        dispatch(loadTypeOptionsSuccess(res));
        dispatch(loadingAction(false));
        resolve(true);
      });
    });
  };
}

export function loadTableOptionsAction() {
  return (dispatch) => {
    dispatch(loadingAction(true));
    return new Promise((resolve) => {
      loadDashboard().then((res) => {
        dispatch(loadTableOptionsSuccess(res));
        dispatch(loadingAction(false));
        resolve(true);
      });
    });
  };
}

export function fetchdashboardsAction(id, param, callback) {
  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(fetchDashboardsInit());
    return new Promise((resolve) => {
      loadDashboardView(id, param).then((res) => {
        dispatch(fetchDashboardsSuccess(res));
        if (callback) {
          callback(res);
        }
        dispatch(loadingAction(false));
        resolve(true);
      });
    });
  };
}

export function graphSaveSuccess(res) {
  return {
    type: SAVE_GRAPH_SUCCESS,
    payload: res,
  };
}

export function graphDeleteSuccess(res) {
  return {
    type: DELETE_GRAPH_SUCCESS,
    payload: res,
  };
}

export function dashboardChangeAction(id) {
  return (dispatch) => {
    return new Promise((resolve) => {
      loadDashboardView(id).then((res) => {
        dispatch(dashboardChangeSuccess(res));
        resolve(true);
      });
    });
  };
}

export function saveModalAction(data, callback) {
  return (dispatch) => {
    dispatch(loadingAction(true));
    return new Promise((resolve) => {
      saveGraph(data).then((res) => {
        dispatch(loadingAction(false));
        dispatch(graphSaveSuccess(res));
        callback();
        resolve(true);
      });
    });
  };
}

export function deleteGraphAction(data, callback) {
  return (dispatch) => {
    // dispatch(loadingAction(true));
    // return new Promise((resolve) => {
    //   deleteGraph(data).then(() => {
    //     dispatch(loadingAction(false));
    //     dispatch(graphDeleteSuccess(data));
    //     resolve(true);
    //   });
    // });
    dispatch(graphDeleteSuccess(data));
    if (callback) {
      callback();
    }
  };
}

export function cancelModalAction() {
  return (dispatch) => {
    dispatch({
      type: MODAL_CANCELLED,
    });
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

export function changeLayoutAction(data) {
  return (dispatch) => {
    dispatch({
      type: LAYOUT_CHANGED_SUCCESS,
      payload: data,
    });
  };
}

export function getFilters(data) {
  return (dispatch) => {
    dispatch({
      type: GET_FILTERS,
      payload: data,
    });
  };
}

export function getFiltersAction() {
  return (dispatch) => {
    return new Promise((resolve) => {
      loadFilters().then((res) => {
        dispatch(getFilters(res));
        resolve(true);
      });
    });
  };
}
