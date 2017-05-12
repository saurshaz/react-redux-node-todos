import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState.app, action) {
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
      return Object.assign({}, state, {
        getting_items: false,
        data: (action.data && action.data.body && action.data.body.data),
      });

    default:
      return state;
  }
}
