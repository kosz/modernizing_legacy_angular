declare var angular: any;

import {makeDirective, makeSelector} from './a1to2';
import {TimerComponent} from './controllers/timer';

angular.module('legacyApp', [ 'ts-hack' ])
    .directive(
      makeSelector(TimerComponent), 
      makeDirective(TimerComponent));


angular.element(document).ready(function() {
  angular.bootstrap(document, ['legacyApp']);
});
