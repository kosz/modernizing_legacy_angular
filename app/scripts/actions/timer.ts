export const UPDATE_TIMER = 'UPDATE_TIMER';
export const REQUEST_DATA = 'REQUEST_DATA';


export function updateTimer() {
  return {
    type: UPDATE_TIMER
  };
}

export function receiveData(payload) {
  return {
    type: RECEIVE_DATA,
    payload: payload
  };
}

function requestData(query) {
  return function(state, dispatch) {
    $http(window.BACKEND_ADDRESS + '/asdfa)
          .then(dispatch(receiveData))
          .catch(dispatch(receiveHTTPError));
    return {
      type: REQUEST_DATA,
      payload: { query }
    };
  }
}

export function receiveHTTPError(payload) {
  return {
    type: RECEIVE_HTTP_ERROR,
    payload: payload
  };

}

export function shouldRequestData(query) {
  return function(state, dispatch){ 
    if (state.timer.isReqesting) {
      return;
    }
    dispatch(requestData(query));
  } 
}
