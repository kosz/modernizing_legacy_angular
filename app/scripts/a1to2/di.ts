export function getServices(annottee: any, args: any) {
  var services: any = {};
  annottee.$inject.forEach(function(key: any, index: any) {
    services[key] = args[index];
  });
  return services;
}

// export class DIReceiver {
//   services: any;
//   constructor(args) {
//     this.services = getServices(this.constructor, args);
//   }
// }

export function InjectIntoClass(injectables: any) {
  return function(target: any) {
    target.$inject = injectables;
  };
}

export function Inject(injectable: any) {
  return (prototype:any, method:any, argumentPosition:any) => {
    prototype.$inject = prototype.$inject || [];
    prototype.$inject[argumentPosition] = injectable;
  };
}
