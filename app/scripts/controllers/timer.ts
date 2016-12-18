import {Inject, Component} from '../a1to2';
import {updateTimer} from '../actions/timer';

@Component({
  selector: 'timer',
  template: `<div ng-click="ctrl.updateTimer()">
               {{ hello }} Timer Component
               {{ ctrl.timer }}
             </div>
            `
})
export class TimerComponent {

  private timer: number;

  constructor(
    @Inject('$scope') private $scope:any,
    @Inject('$ngRedux') private $ngRedux:any
    ) {
    $scope.hello = 'world';
    // this magically attaches all the functions to the controller
    // mapStateToThis selects the right slice of data from the redux state
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, { updateTimer })(this);
    $scope.$on('$destroy', unsubscribe);
  }
  
  myClick() {
    console.log('i got clicked');
    // this is one way of dispatching
    this.$ngRedux.dispatch(updateTimer());
  }

  mapStateToThis = (state: any) => {
    return {
      // this gets bound to this.timer which in the template is ctrl.timer
      timer: state.timer
    };
  };
  
};
