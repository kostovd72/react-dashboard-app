// import apiFetch from 'utils/apiFetch';
// import {
//   loadingAction,
// } from 'store/globalState/global';

// action types
import {
  GET_NODES,
} from './types';

// middleware
export const getNodesAction = nodeId => async (dispatch) => {
  // const url = '/nodes/{nodeId}';
  // dispatch(loadingAction(true));
  // const res = await apiFetch('GET', { endPoint: url });
  // dispatch({ type: GET_NODES, payload: res.data });
  // dispatch(loadingAction(false));

  let nodeIndex = nodeId * 3 + 1;

  function createData() {
    nodeIndex += 1;
    return {
      id: nodeIndex,
      name: `tree${nodeIndex}`,
      root: false,
      leaf: true,
      parentIds: [
        nodeId,
      ],
      childIds: [
      ],
    };
  }

  const res = [
    createData(),
    createData(),
    createData(),
    createData(),
  ];

  dispatch({ type: GET_NODES, payload: res });
};

// middleware
export const getTreesAction = () => async (dispatch) => {
  // const url = '/trees';
  // dispatch(loadingAction(true));
  // const res = await apiFetch('GET', { endPoint: url });
  // dispatch({ type: GET_NODES, payload: res.data });
  // dispatch(loadingAction(false));

  let nodeIndex = 0;

  function createData(childIds) {
    nodeIndex += 1;
    return {
      id: nodeIndex,
      name: `string${nodeIndex}`,
      root: true,
      leaf: false,
      parentIds: [
      ],
      childIds: [...childIds],
    };
  }

  const res = [
    createData([1, 2, 3]),
    createData([4, 5, 6]),
    createData([7, 8, 9]),
    createData([10, 11, 12]),
    createData([13, 14, 15]),
    createData([16, 17, 18]),
  ];

  dispatch({ type: GET_NODES, payload: res });
};
