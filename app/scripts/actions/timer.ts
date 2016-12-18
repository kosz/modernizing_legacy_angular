export const UPDATE_TIMER = 'UPDATE_TIMER';


export function updateTimer() {
  console.log('timer update');
  return {
    type: UPDATE_TIMER
  };
}
