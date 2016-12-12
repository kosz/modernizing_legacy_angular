declare module "a1to2/component-utils" {
    export function makeDirective(component: any): () => {
        restrict: string;
        scope: {};
        controllerAs: string;
        bindToController: boolean;
        controller: any;
    };
    export function makeSelector(component: any): any;
}
declare module "a1to2/di" {
    export function getServices(annottee: any, args: any): any;
    export function InjectIntoClass(injectables: any): (target: any) => void;
    export function Inject(injectable: any): (prototype: any, method: any, argumentPosition: any) => void;
}
declare module "controllers/timer" {
    export class TimerComponent {
        private $scope;
        private static selector;
        private static template;
        private timer;
        constructor($scope: any);
    }
}
declare module "app" {
}
