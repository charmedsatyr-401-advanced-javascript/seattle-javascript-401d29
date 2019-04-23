import * as utils from '../lib/utils';

let api = 'https://javascript-401-api.herokuapp.com/api/v1/players';

// This won't work.
// export const getStuff = async () => {
//   let records = await utils.fetchData(api);
//   return {
//     type: 'GET',
//     payload: records,
//   };
// };

// Refactor by switching the above function out for this one.
// Here, with thunk involved, we return the dispatch of the
// correct action
export const getStuff = () => dispatch => {
  return utils.fetchData(api).then(records => {
    dispatch(runAsyncAction(records));
  });
};

const runAsyncAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};
