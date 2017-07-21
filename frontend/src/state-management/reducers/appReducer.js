import * as types from '../actions/actionTypes';
import initialState from './initialState';
const ZERO = 0;

export default function appReducer(state = initialState.app, action) {
  const dataX = action.data && action.data.body && action.data.body.data && action.data.body.data;

  switch (action.type) {
    case types.APP_DATA_CALL_START:
      return Object.assign({}, state, {
        data_call_in_progress: true,
      });
    case types.APP_DATA_CALL_DONE:
      return Object.assign({}, state, {
        data_call_in_progress: false,
      });
    case types.GET_ITEMS_FOR_LIST:

      if (dataX && dataX.length !== ZERO) {
        return Object.assign({}, state, {
          getting_items: false,
          data: dataX,
        });
      }

      return Object.assign({}, state, {
        getting_items: false,
      });


    default:
      return state;
  }
}
