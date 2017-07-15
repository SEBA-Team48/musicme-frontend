'use strict';

import UserService from './../../services/user/user.service';

import template from './app-footer.template.html';

import './app-footer.style.css';

class AppFooterComponent {
    constructor(){
        this.controller = AppFooterComponentController;
        this.template = template;

    }

    static get name() {
        return 'appFooter';
    }


}

class AppFooterComponentController{
    constructor($state,UserService){
        this.year = new Date().getFullYear();
        this.$state = $state;
        this.UserService = UserService;
    }

    impressum(){
        this.$state.go('impressum',{})
    }

    privacy(){
        this.$state.go('privacy', {})
    }

    static get $inject(){
        return ['$state', UserService.name];
    }
}


export default AppFooterComponent;