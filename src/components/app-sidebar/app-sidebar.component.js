'use strict';

import UserService from './../../services/user/user.service';

import template from './app-sidebar.template.html';

import './app-sidebar.style.css';

class AppSidebarComponent {
    constructor() {
        this.controller = AppSidebarComponentController;
        this.template = template;

    }

    static get name() {
        return 'appSidebar';
    }

}

    class AppSidebarComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;

    }
    redirectCancelLesson(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectEditProfile(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectEditProfile(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectEditProfile(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

    redirectEditProfile(){

        if(this.UserService.isAuthenticated()) {
            this.$state.go('login',{})
        } else {
            this.$state.go('login',{});
        }
    }

        static get $inject(){
            return ['$state', UserService.name];
        }
}

export default AppSidebarComponent;