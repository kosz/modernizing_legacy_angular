console.log('test hello');

declare var angular: any;

import {makeDirective, makeSelector} from './a1to2/component-utils';
import {TimerComponent} from './controllers/timer';

angular.module('legacyApp', [])
  .directive(
    makeSelector(TimerComponent), 
    makeDirective(TimerComponent));

angular.element(document).ready(function() {
  angular.bootstrap(document, ['legacyApp']);
});
