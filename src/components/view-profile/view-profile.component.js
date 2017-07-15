
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-profile.template.html';


class ViewProfileComponent {
    constructor(){
        this.controller = ViewProfileComponentController;
        this.template = template;
        this.bindings = {
            user: '<',
        }
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
        return this.user.username;
    }

    getFirstName(){
        return this.user.fname;
    }

    getLastName(){
        return this.user.lname;
    }

    getEmail(){
        return this.user.emailadress;
    }

    
    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;