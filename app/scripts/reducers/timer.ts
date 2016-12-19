import { UPDATE_TIMER } from '../actions/timer';

interface ITheoreticalState {
  data: any;
  query: any;
  isRequested: boolean;
  errorMessage: string;
}

let INITIAL_STATE = { 
  data: {},
  query: {},
  errorMessage: undefined,
  isRequested: false
};

export default function timer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
  case REQUEST_DATA:
    return Object.assign({}, state, {
      data: undefined,
      query: action.payload.query,
      isRequested: true
    });
  case RECEIVE_DATA:
    return Object.assign({}, state, {
      data: action.payload.data,
      query: {},
      isRequested: false
    });
  case HTTP_ERROR:
    return Object.assign({}, state, {
      data: undefined,
      query: {},
      errorMessage: action.payload.error.message
      isRequested: false
    };
  default:
    return state;
  }
}
