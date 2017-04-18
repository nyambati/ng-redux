import { mapComponentsToModule, mapDirectivesToModule, mapPipesToModule, getComponentName, mapServicesToModule } from './utils';

export const NgModule = (config) => {
    const app = angular.module(config.name, config.modules);
    mapComponentsToModule(app, config.components);
    mapDirectivesToModule(app, config.directives);
    mapPipesToModule(app, config.pipes);
    mapServicesToModule(app, config.providers);
    return target => app;
};

export const Component = config => target => Object
    .assign({}, config, { controller: target })

export const Directive = config => Target => Object
    .assign({}, config, { render: new Target().render });

export const bootstrap = name => angular
    .element(document)
    .ready(() => angular.bootstrap(document, [name]));

export const Pipe = config => Target => Object
    .assign({}, config, { transform: new Target().transform });

export const Injectable = name => classFn => Object
    .assign({}, { name: name ? name : classFn.name, classFn })

export const Inject = (...injectables) => (target) => {
    target.$inject = injectables;
    return target;
}