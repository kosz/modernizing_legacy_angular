import {Inject, Component} from '../a1to2';

@Component({
  selector: 'timer',
  template: '<div ng-click="ctrl.myClick()">{{ hello }} Timer Component {{ ctrl.timer + 1 }}</div>'
})
export class TimerComponent {

  private timer: number;

  constructor(
    @Inject('$scope') private $scope:any
    ) {
    this.timer = 0;
    $scope.hello = 'world'
  }
  
  myClick() {
    console.log('i got clicked');
  }
  
};
