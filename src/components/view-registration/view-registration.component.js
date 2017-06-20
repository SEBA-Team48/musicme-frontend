
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-registration.template.html';
import './view-registration.style.css';

class ViewRegistrationComponent {
    constructor(){
        this.controller = ViewRegistrationComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewRegistration';
    }


}

class ViewRegistrationComponentController {
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit() {
        this.registration = {};
    }

    submit(){
        let fname = this.registration.fname;
        let lname = this.registration.lname;
        let user = this.registration.username;
        let password = this.registration.password;
        let emailadress = this.registration.emailadress;
		
        this.UserService.register(user,password,fname,lname,emailadress).then(()=> {
            this.$state.go('landing',{});
        });
    }


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewRegistrationComponent;