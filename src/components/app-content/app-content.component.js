'use strict';

import template from './app-content.template.html';
import UserService from './../../services/user/user.service';

class AppContentComponent {
    constructor() {
        this.controller = AppContentComponentController;
        this.template = template;


    }

    static get name() {
        return 'appContent';
    }


}

class AppContentComponentController {
    constructor($state,UserService) {
        this.$state = $state;
        this.UserService = UserService;

    }

    isAuthenticated(){
        return this.UserService.isAuthenticated();
    }

    static get $inject(){
        return ['$state', UserService.name];
    }
}


export default AppContentComponent;