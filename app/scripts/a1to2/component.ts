declare var angular:any;

export function Component(config: IComponentConfig) {
  return function(targetClass: any) {
    angular.extend(targetClass, config);
  }
}

interface IComponentConfig {
  selector: string;
  template?: string;
  templateUrl?: string;
}
