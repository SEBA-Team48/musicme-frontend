
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-profile.template.html';


class ViewProfileComponent {
    constructor(){
        this.controller = ViewProfileComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewProfile';
    }


}

class ViewProfileComponentController {
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }
    getCurrentUser(){
        let user = this.UserService.getCurrentUser();
        return user.username;
    }

    getFirstName(){
        let user = this.UserService.getCurrentUser();
        return user.fname;
    }

    getLastName(){
        let user = this.UserService.getCurrentUser();
        return user.lname;
    }

    getEmail(){
        let user = this.UserService.getCurrentUser();
        return user.emailadress;
    }

    
    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;