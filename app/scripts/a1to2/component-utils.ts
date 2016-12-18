declare var angular: any;

export function makeDirective(component: any) {
  return () => {

    var ddo = {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: true,
      controller: component
    };

    if (component.template) {
      angular.extend(ddo, {
        template: component.template
      });
    }

    if (component.templateUrl) {
      angular.extend(ddo, {
        templateUrl: component.templateUrl
      });
    }
    
    if (component.options) {
      angular.extend(ddo, component.options);
    }
    
    return ddo;
  };
}

export function makeSelector(component: any) {
  return component.selector.replace(/-([a-z])/g,
    function(g: any) {
      return g[1].toUpperCase();
    });
}
