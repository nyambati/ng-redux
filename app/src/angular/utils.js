export const getComponentName = (name) => {
    return `${name[0].toLowerCase()}${name.substr(1, name.length)}`
}

export const mapComponentsToModule = (app, components) => {
    for (let component of components) {
        let componentName = getComponentName(component.controller.name);
        app.component(componentName, component);
    }
    return app;
}

export const mapDirectivesToModule = (app, directives) => {
    for (let directive of directives) {
        app.directive(directive.selector, directive.render);
    }
    return app;
}

export const mapPipesToModule = (app, pipes) => {
    for (let pipe of pipes) {
        app.filter(pipe.name, pipe.transform);
    }
}