
'use strict';

import template from './app-header.template.html';
import UserService from './../../services/user/user.service';

import './app-header.style.css';

class AppHeaderComponent {
    constructor(){
        this.controller = AppHeaderComponentController;
        this.template = template;
        this.bindings = {
            user: '<',
        }

    }

    static get name() {
        return 'appHeader';
    }


}

class AppHeaderComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;

    }
    seeProfile(){
        this.$state.go('profile',{});
    }

    goUpgrade(){
        this.$state.go('upgrade',{});
    }

    openMenu($mdMenu, ev) {
        $mdMenu.open(ev);
    }

    isAuthenticated(){
        return this.UserService.isAuthenticated();
    }


    getCurrentUser(){
        let user = this.UserService.getCurrentUser();
        return user.username;
    }

    goHome(){
        this.$state.go('lessons',{});
    }

    login(){
        this.$state.go('login',{});
    }

    logout(){
        this.UserService.logout();
        this.$state.go('landingPage',{});
    }

    register(){
        this.$state.go('register',{});
    }

    getMusicMeLogo(){
        let logo = './musicme.png';
        return logo;
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

    returnIsTeacher(){
        let teacher_details = this.UserService.getCurrentUser();
        return teacher_details['is_teacher'];
    }

}


export default AppHeaderComponent;