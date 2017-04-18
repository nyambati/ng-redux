import { Component } from '../../angular/core';
import template from './post.form.component.html';
import './post.form.scss';

@Component({
    bindings: {
        onSubmit: '&',
        button: '@',
        header: '<',
        data: '<'
    },
    template
})

export default class PostForm {
    submitForm(data) {
        this.onSubmit({
            $event: { data }
        })
    }
}