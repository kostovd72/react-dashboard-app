// import apiFetch from 'utils/apiFetch';
// import {
//   loadingAction,
// } from '../../../store/globalState/global';

import {
  loadSectorOptions,
  loadSegmentOptions,
  loadTypeOptions,
  loadCountryGroupOptions,
  loadCountryOptions,
  searchClients,
  saveClients,
  compareClients,
  createClients,
} from '../../../services/ComparableService';

import {
  FETCH_TYPEOPTIONS_SUCCESS,
  FETCH_SECTOROPTIONS_SUCCESS,
  FETCH_SEGMENTOPTIONS_SUCCESS,
  FETCH_COUNTRYOPTIONS_SUCCESS,
  FETCH_COUNTRYGROUPOPTIONS_SUCCESS,
  SAVE_CLIENTS_SUCCESS,
  COMPARE_CLIENTS_SUCCESS,
} from './types';

export function loadTypeOptionsAction() {
  return (dispatch) => {
    return new Promise((resolve) => {
      loadTypeOptions().then((res) => {
        dispatch({
          type: FETCH_TYPEOPTIONS_SUCCESS,
          payload: res,
        });
        resolve(true);
      });
    });
  };
}
export function loadSectorOptionsAction() {
  return (dispatch) => {
    return new Promise((resolve) => {
      loadSectorOptions().then((res) => {
        dispatch({
          type: FETCH_SECTOROPTIONS_SUCCESS,
          payload: res,
        });
        resolve(true);
      });
    });
  };
}
export function loadCountryOptionsAction() {
  return (dispatch) => {
    return new Promise((resolve) => {
      loadCountryOptions().then((res) => {
        dispatch({
          type: FETCH_COUNTRYOPTIONS_SUCCESS,
          payload: res,
        });
        resolve(true);
      });
    });
  };
}
export function loadCountryGroupOptionsAction() {
  return (dispatch) => {
    return new Promise((resolve) => {
      loadCountryGroupOptions().then((res) => {
        dispatch({
          type: FETCH_COUNTRYGROUPOPTIONS_SUCCESS,
          payload: res,
        });
        resolve(true);
      });
    });
  };
}
export function loadSegmentOptionsAction() {
  return (dispatch) => {
    return new Promise((resolve) => {
      loadSegmentOptions().then((res) => {
        dispatch({
          type: FETCH_SEGMENTOPTIONS_SUCCESS,
          payload: res,
        });
        resolve(true);
      });
    });
  };
}
export function searchClientsAction(data, callback) {
  return () => {
    return new Promise((resolve) => {
      searchClients(data).then((res) => {
        callback(res);
        resolve(true);
      });
    });
  };
}
export function compareClientsAction(data) {
  return (dispatch) => {
    return new Promise((resolve) => {
      compareClients(data).then((res) => {
        dispatch({
          type: COMPARE_CLIENTS_SUCCESS,
          payload: res,
        });
        resolve(true);
      });
    });
  };
}
export function saveClientsAction(params, callback) {
  return (dispatch) => {
    return new Promise((resolve) => {
      if (params.mode === 'auto') {
        saveClients(params.ids).then((res) => {
          dispatch({
            type: SAVE_CLIENTS_SUCCESS,
            payload: res,
          });
          callback(res);
          resolve(true);
        });
      } else {
        createClients(params.data).then((res) => {
          dispatch({
            type: SAVE_CLIENTS_SUCCESS,
            payload: [res],
          });
          callback([res]);
          resolve(true);
        });
      }
    });
  };
}
