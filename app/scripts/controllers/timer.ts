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
    // this ngRedux code magically attaches all the functions to the controller
    // mapStateToThis selects the right slice of data from the redux state
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, { updateTimer })(this);
    $scope.$on('$destroy', unsubscribe);
  }
  
  // this is not used however it serves as an example on how to 
  // directly dispatch Redux Actions from a Controller Instance Method
  // however this is not used because instead:
  // the redux action creator function is bound to our controller by $ngRedux.connect
  myClick() {
    this.$ngRedux.dispatch(updateTimer());
  }

  // this is ng-redux code based on the ng-redux connect pattern 
  // ( the ng-redux connect pattern is kind of ugly, the @select pattern 
  //   from ng2-redux is much nicer however not available in ng-redux at this point.
  //   I may add some code to this repo in the future which can add @select like
  //   functionality to ng-redux )
  mapStateToThis = (state: any) => {
    return {
      // this gets bound to this.timer which in the template is ctrl.timer
      timer: state.timer
    };
  };
  
};
