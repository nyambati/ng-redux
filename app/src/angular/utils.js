export const getComponentName = (name) => {
    if (!name) return;
    return `${name[0].toLowerCase()}${name.substr(1, name.length)}`;
};

export const mapComponentsToModule = (app, components) => {
    if (!components) return;
    for (const component of components) {
        const componentName = getComponentName(component.controller.name);
        app.component(componentName, component);
    }
    return app;
};

export const mapDirectivesToModule = (app, directives) => {
    if (!directives) return;
    for (const directive of directives) {
        app.directive(directive.selector, directive.render);
    }
    return app;
};

export const mapPipesToModule = (app, pipes) => {
    if (!pipes) return;
    for (const pipe of pipes) {
        app.filter(pipe.name, pipe.transform);
    }
    return app;
};

export const mapServicesToModule = (app, services) => {
    if (!services) return;
    for (const service of services) {
        app.service(service.name, service.classFn);
    }
    return app;
};
