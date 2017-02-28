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


angular.element(document).ready(function() {
  angular.bootstrap(document, ['legacyApp']);
});

console.log('we online');
export interface Transaction {
  id?: any;
  type?: string;
  location?: string;
  date: Date;
  amount: number;
  sourceAccountId: string;
  destinationAccountId: string;
}

//let transaction:Transaction = {
//  date: new Date(),
//  ammount: 200,
//  sourceAccountId: 'EC5C',
//  destinationAccountId: '0011'
//};

// mock
function getLocation() {
  return 'asdf';
}
function addTransactionFee(nr: number) {
  return nr + 1;
} 

function saveLogEntry(a: any, b: any) {
  console.log(a, b);
}
// end mock

const processTransaction = (transaction: Transaction): Transaction => 
 ({ ...transaction, finalAmount: addTransactionFee(transaction.amount)});
  
const logTransaction = (transaction: Transaction): Transaction => {
  saveLogEntry(transaction.id, transaction.date);
  return transaction;
};

const addLocation = (obj: any) => ({...obj, location: getLocation()});

// this obviously should be elsewhere 
const liteCompose = (arrayOfFunctions: any) => (payload: any) => {
  let p = payload;
  arrayOfFunctions.forEach((f: any) => p = f(p));
  return p;
};

const finalProcessTransaction = liteCompose([processTransaction, logTransaction, addLocation]);

let transaction:Transaction = finalProcessTransaction({
  date: new Date(),
  amount: 200,
  sourceAccountId: 'EC5C',
  destinationAccountId: '0021'
});
console.log(transaction);
