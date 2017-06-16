'use strict';

import UserService from './../../services/user/user.service';

import template from './app-header.template.html';

import './app-header.style.css';

class AppSidebarComponent {
    constructor(){
        this.controller = AppSidebarComponentController;
        this.template = template;

    }

    static get name() {
        return 'appSidebar';
    }


}