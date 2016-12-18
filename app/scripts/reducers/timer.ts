import { UPDATE_TIMER } from '../actions/timer';

export default function timer(state = 0, action: any) {
  switch (action.type) {
  case UPDATE_TIMER:
    return new Date().getMilliseconds();
  default:
    return state;
  }
}
