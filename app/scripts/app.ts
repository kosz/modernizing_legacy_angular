declare var angular: any;

import {makeDirective, makeSelector} from './a1to2';
import {TimerComponent} from './controllers/timer';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

angular.module('legacyApp', [ 'ts-hack', ngRedux ])
    .config(($ngReduxProvider: any) => {
      $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
    })
    .directive(
      makeSelector(TimerComponent), 
      makeDirective(TimerComponent));


      console.log('starting stuff');

angular.element(document).ready(function() {
  angular.bootstrap(document, ['legacyApp']);
});
