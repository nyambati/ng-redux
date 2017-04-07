import { mapComponentsToModule, mapDirectivesToModule, mapPipesToModule, getComponentName } from './utils';

export const NgModule = config => {
    let app = angular.module(config.name, config.modules);
    mapComponentsToModule(app, config.components);
    mapDirectivesToModule(app, config.directives);
    mapPipesToModule(app, config.pipes);

    return target => {
        return app;
    }
}

export const Component = config => {
    return target => {
        config.controller = target;
        return config
    }
}

export const Directive = config => {
    return target => {
        let { render } = new target();
        config.render = render;
        return config;
    }
}

export const bootstrap = name => {
    return angular.element(document).ready(() => {
        return angular.bootstrap(document, [name]);
    })
}

export const Pipe = config => {
    return target => {
        config.transform = new target().transform;
        return config;
    }
}