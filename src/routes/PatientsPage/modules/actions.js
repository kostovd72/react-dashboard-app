// import apiFetch from 'utils/apiFetch';
// import {
//   loadingAction,
// } from 'store/globalState/global';

// action types
import {
  FETCH_PATIENTS,
  INIT_PATIENTS,
} from './types';

// action
export const fetchPatients = () => {
  return {
    type: FETCH_PATIENTS,
  };
};

// action
export const initPatients = () => {
  return {
    type: INIT_PATIENTS,
  };
};

// middleware
export const fetchPatientsAction = () => async (dispatch) => {
  // const url = 'request_password';
  // dispatch(loadingAction(true));
  // const res = await apiFetch('GET', { endPoint: url });
  // dispatch({ type: FETCH_PATIENTS, payload: res.data });
  // dispatch(loadingAction(false));

  let patientId = 0;

  function createData(firstName, lastName, factoryId) {
    patientId += 1;
    return {
      imageurl: 'string',
      first_name: firstName,
      last_name: lastName,
      factory: {
        id: 'string',
        name: 'string',
      },
      address: 'string',
      home_adress: 'string',
      father_name: 'string',
      mother_name: 'string',
      id: patientId,
      country: {
        id: 'string',
        name: 'string',
      },
      region: {
        id: 'string',
        name: 'string',
      },
      phone: 'string',
      position: 'string',
      start_date: '23/11/2000',
      insourance_start_date: '23/11/2000',
      home_phone: 'string',
      status: {
        id: 'string',
        name: 'string',
      },
      age: 'string',
      national_id: 'string',
      factory_id: factoryId,
      emergency_contact: {
        name: 'string',
        last_name: 'string',
        phone: 'string',
        mail: 'string',
      },
      email: 'string',
    };
  }

  const res = [
    createData('Naina', 'Johar', 'Factory 1'),
    createData('Kajol', 'Majeed', 'Factory 1'),
    createData('Priyanka', 'Khan', 'Factory 1'),
    createData('Anjali', 'Kapoor', 'Factory 1'),
    createData('Anushka', 'Sharma', 'Factory 1'),
    createData('Aarusha', 'Badour', 'Factory 1'),
    createData('Anjali', 'Kapoor', 'Factory 1'),
    createData('Araxi', 'Malhotra', 'Factory 1'),
    createData('Kajol', 'Chopra', 'Factory 1'),
    createData('Priyanka', 'Khan', 'Factory 1'),
  ];

  dispatch({ type: FETCH_PATIENTS, payload: res });
};
