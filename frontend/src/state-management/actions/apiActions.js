// import superagent from 'superagent';
import superagent from 'superagent';
import * as types from './actionTypes';
import { appDataCallStart, appDataCallDone } from './appActions';

export const ping = (data) => ({
  type: types.APP_PING_CALL,
  data,
});

export const getItemsForListSuccess = (data) => ({
  type: types.GET_ITEMS_FOR_LIST,
  data,
});


export const getItemsForList = () => (dispatch, /* getState*/) => {
  dispatch(appDataCallStart('get items starts'));
  /* eslint-disable */
  superagent.get(`http://localhost:3000/lists`)
    .set('Accept', 'application/json')
    .end((err, data) => {
      if (err) {
        // dispatch(getItemsForListFailure({ term, results: null, error: data.error }));
        dispatch(appDataCallDone('get items done error '));
      } else {
        // console.log(resp);
        dispatch(getItemsForListSuccess(data));
        dispatch(appDataCallDone('get items done success'));
      }
    });
};
