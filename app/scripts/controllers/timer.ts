import {Inject} from '../a1to2/di';

export class TimerComponent {

  private static selector = 'timer';
  private static template = '<div>{{ hello }} Timer Component {{ ctrl.timer + 1 }}</div>';

  private timer: number;

  constructor(
    @Inject('$scope') private $scope:any
    ) {
    this.timer = 0;
    $scope.hello = 'world'
  }
  
};
