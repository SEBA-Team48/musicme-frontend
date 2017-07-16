
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-registration.template.html';

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
        let is_teacher = false;


        this.UserService.register(user,password,fname,lname,emailadress,is_teacher).then(()=> {
            this.$state.go('landingPage',{});
        });
    }


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewRegistrationComponent;